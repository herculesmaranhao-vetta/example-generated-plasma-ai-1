import type { EvolutionNode, PokemonDetail, PokemonListItem, PokemonStat } from '@/types/pokemon';
import axios from 'axios';

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
    client.get(`/pokemon/${id}`),
    client.get(`/pokemon-species/${id}`),
  ]);

  const pokemon = pokemonRes.data;
  const species = speciesRes.data;

  const flavorTextEntry = species.flavor_text_entries?.find(
    (e: { language: { name: string } }) => e.language.name === 'en',
  );

  const stats: PokemonStat[] = pokemon.stats.map(
    (s: { stat: { name: string }; base_stat: number }) => ({
      name: s.stat.name,
      value: s.base_stat,
    }),
  );

  const types: string[] = pokemon.types.map((t: { type: { name: string } }) => t.type.name);

  let evolutionChain: EvolutionNode[] = [];
  try {
    const evolutionUrl = species.evolution_chain?.url;
    if (evolutionUrl) {
      const evoRes = await client.get(evolutionUrl);
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
    abilities: pokemon.abilities.map((a: { ability: { name: string } }) => a.ability.name),
    flavorText:
      flavorTextEntry?.flavor_text?.replace(/[\n\f]/g, ' ') ?? 'No description available.',
    stats,
    evolutionChain,
  };
}

export async function getPokemonByName(name: string): Promise<PokemonDetail> {
  const { data } = await client.get(`/pokemon/${name.toLowerCase()}`);
  return getPokemonById(data.id);
}

export async function getTypeList(): Promise<string[]> {
  const { data } = await client.get('/type');
  return data.results
    .map((t: { name: string }) => t.name)
    .filter((n: string) => n !== 'unknown' && n !== 'shadow');
}

export async function getPokemonByType(type: string): Promise<PokemonListItem[]> {
  const { data } = await client.get(`/type/${type}`);
  const pokemonEntries = data.pokemon as { pokemon: { name: string; url: string } }[];

  return pokemonEntries.slice(0, 50).map((entry) => {
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

// Async version of parseEvolutionChain
export async function parseEvolutionChainAsync(chain: {
  species: { name: string };
  evolves_to: any[];
}): Promise<EvolutionNode[]> {
  const nodes: EvolutionNode[] = [];

  async function walk(c: { species: { name: string }; evolves_to: any[] }) {
    const name = c.species.name;
    try {
      const { data } = await client.get(`/pokemon/${name}`);
      const id = data.id;
      nodes.push({
        id,
        name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
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
