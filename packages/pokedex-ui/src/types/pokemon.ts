export interface PokemonListItem {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonDetail extends PokemonListItem {
  height: number;
  weight: number;
  abilities: string[];
  flavorText: string;
  stats: PokemonStat[];
  evolutionChain: EvolutionNode[];
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface EvolutionNode {
  id: number;
  name: string;
  image: string;
}
