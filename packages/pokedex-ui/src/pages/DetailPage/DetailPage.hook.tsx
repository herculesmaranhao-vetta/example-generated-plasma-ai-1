import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "@/api/pokemon";
import type { PokemonDetail } from "@/types/pokemon";

interface UseDetailPageReturn {
  pokemon: PokemonDetail | null;
  loading: boolean;
  error: string | null;
  activeTab: string;
  handleTabChange: (key: string) => void;
  pokemonId: string | undefined;
}

export function useDetailPage(): UseDetailPageReturn {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("about");

  const loadPokemon = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getPokemonById(parseInt(id, 10));
      setPokemon(data);
    } catch {
      setError("Pokemon not found");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void loadPokemon();
  }, [loadPokemon]);

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  return { pokemon, loading, error, activeTab, handleTabChange, pokemonId: id };
}
