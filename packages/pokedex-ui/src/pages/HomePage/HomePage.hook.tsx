import { getPokemonByType, getPokemonList } from "@/api/pokemon";
import type { PokemonListItem } from "@/types/pokemon";
import { useCallback, useEffect, useState } from "react";

interface UseHomePageReturn {
  pokemon: PokemonListItem[];
  loading: boolean;
  hasMore: boolean;
  searchQuery: string;
  selectedType: string;
  handleSearch: (query: string) => void;
  handleTypeFilter: (type: string) => void;
  handleLoadMore: () => void;
}

export function useHomePage(): UseHomePageReturn {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const limit = 20;

  const loadPokemon = useCallback(async (reset = false) => {
    setLoading(true);
    try {
      const currentOffset = reset ? 0 : offset;
      const items = await getPokemonList(currentOffset, limit);
      setPokemon((prev) => (reset ? items : [...prev, ...items]));
      setHasMore(items.length === limit);
      setOffset(currentOffset + limit);
    } catch {
      // Silently fail - UI shows empty state
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    void loadPokemon(true);
  }, [loadPokemon]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleTypeFilter = useCallback(async (type: string) => {
    setSelectedType(type);
    setLoading(true);
    try {
      if (type) {
        const items = await getPokemonByType(type);
        setPokemon(items);
        setHasMore(false);
      } else {
        await loadPokemon(true);
      }
    } catch {
      // Silently fail - UI shows empty state
    } finally {
      setLoading(false);
    }
  }, [loadPokemon]);

  const handleLoadMore = useCallback(() => {
    void loadPokemon(false);
  }, [loadPokemon]);

  const filteredPokemon = searchQuery
    ? pokemon.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.id.toString() === searchQuery,
      )
    : pokemon;

  return {
    pokemon: filteredPokemon,
    loading,
    hasMore,
    searchQuery,
    selectedType,
    handleSearch,
    handleTypeFilter,
    handleLoadMore,
  };
}
