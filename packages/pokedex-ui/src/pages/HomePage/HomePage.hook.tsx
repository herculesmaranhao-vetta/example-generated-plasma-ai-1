import { getPokemonByType, getPokemonList } from "@/api/pokemon";
import type { PokemonListItem } from "@/types/pokemon";
import { useCallback, useEffect, useState } from "react";

export function useHomePage() {
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
      // Error handled by UI
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    loadPokemon(true);
  }, []);

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
      // Error handled by UI
    } finally {
      setLoading(false);
    }
  }, [loadPokemon]);

  const handleLoadMore = useCallback(() => {
    loadPokemon(false);
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