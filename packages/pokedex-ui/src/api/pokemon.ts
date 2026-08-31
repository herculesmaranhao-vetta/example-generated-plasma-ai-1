import type { EvolutionNode, PokemonDetail, PokemonListItem, PokemonStat } from '@/types/pokemon';
import axios from 'axios';

interface FlavorTextEntry {
  flavor_text: string;
  language: { name: string };
}

interface PokemonAbility {
  ability: { name: string };
}

interface PokemonStatRaw {
  stat: { name: string };
  base_stat: number;
}

interface PokemonTypeRaw {
  type: { name: string };
}

interface PokemonSpeciesResponse {
  flavor_text_entries: FlavorTextEntry[];
  evolution_chain: { url: string } | null;
}

interface PokemonResponse {
  id: number;
  name: string;
  stats: PokemonStatRaw[];
  types: PokemonTypeRaw[];
  height: number;
  weight: number;
  abilities: PokemonAbility[];
}

interface EvolutionChainLink {
  species: { name: string };
  evolves_to: EvolutionChainLink[];
}

interface EvolutionChainResponse {
  chain: EvolutionChainLink;
}

interface TypeResponse {
  pokemon: { pokemon: { name: string; url: string } }[];
}

interface TypeListResponse {
  results: { name: string }[];
}

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export interface PokemonListResponse {
  results: { name: string; url: string }[];
  next: string | null;
  count: number;
}

export async function getPokemonList(offset = 0, limit = 20): Promise<PokemonListItem[]> {
  const { data } = await client.get<PokemonListResponse>('/pokemon', {
    params: { offset, limit },
  });

  const items = await Promise.all(
    data.results.map(async (item) => {
      const id = parseInt(item.url.split('/').filter(Boolean).pop() ?? '0', 10);
      const detail = await getPokemonById(id);
      return {
        id,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        types: detail.types,
      };
    }),
  );

  return items;
}

export async function getPokemonById(id: number): Promise<PokemonDetail> {
  const [pokemonRes, speciesRes] = await Promise.all([
    client.get<PokemonResponse>(`/pokemon/${id}`),
    client.get<PokemonSpeciesResponse>(`/pokemon-species/${id}`),
  ]);

  const pokemon = pokemonRes.data;
  const species = speciesRes.data;

  const flavorTextEntry = species.flavor_text_entries?.find(
    (e: FlavorTextEntry) => e.language.name === 'en',
  );

  const stats: PokemonStat[] = pokemon.stats.map(
    (s: PokemonStatRaw) => ({
      name: s.stat.name,
      value: s.base_stat,
    }),
  );

  const types: string[] = pokemon.types.map((t: PokemonTypeRaw) => t.type.name);

  let evolutionChain: EvolutionNode[] = [];
  try {
    const evolutionUrl = species.evolution_chain?.url;
    if (evolutionUrl) {
      const evoRes = await client.get<EvolutionChainResponse>(evolutionUrl);
      evolutionChain = await parseEvolutionChainAsync(evoRes.data.chain);
    }
  } catch {
    evolutionChain = [];
  }

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
    types,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities: pokemon.abilities.map((a: PokemonAbility) => a.ability.name),
    flavorText:
      flavorTextEntry?.flavor_text?.replace(/[\n\f]/g, ' ') ?? 'No descri available.',
    stats,
    evolutionChain,
  };
}

export async function getPokemonByName(name: string): Promise<PokemonDetail> {
  const { data } = await client.get<PokemonResponse>(`/pokemon/${name.toLowerCase()}`);
  return getPokemonById(data.id);
}

export async function getTypeList(): Promise<string[]> {
  const { data } = await client.get<TypeListResponse>('/type');
  return data.results
    .map((t: { name: string }) => t.name)
    .filter((n: string) => n !== 'unknown' && n !== 'shadow');
}

export async function getPokemonByType(type: string): Promise<PokemonListItem[]> {
  const { data } = await client.get<TypeResponse>(`/type/${type}`);

  return data.pokemon.slice(0, 50).map((entry) => {
    const url = entry.pokemon.url;
    const id = parseInt(url.split('/').filter(Boolean).pop() ?? '0', 10);
    return {
      id,
      name: entry.pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      types: [type],
    };
  });
}

export async function parseEvolutionChainAsync(
  chain: EvolutionChainLink,
): Promise<EvolutionNode[]> {
  const nodes: EvolutionNode[] = [];

  async function walk(c: EvolutionChainLink) {
    const name = c.species.name;
    try {
      const { data } = await client.get<PokemonResponse>(`/pokemon/${name}`);
      nodes.push({
        id: data.id,
        name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      });
    } catch {
      nodes.push({
        id: 0,
        name,
        image: '',
      });
    }
    if (c.evolves_to?.length) {
      await walk(c.evolves_to[0]);
    }
  }

  await walk(chain);
  return nodes;
}
