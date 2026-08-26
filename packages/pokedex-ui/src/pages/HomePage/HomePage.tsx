import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Skeleton } from "@/components/atoms/Skeleton";
import { Tag } from "@/components/atoms/Tag";
import { Card } from "@/components/molecules/Card";
import { EmptyState } from "@/components/molecules/EmptyState";
import { Header } from "@/components/molecules/Header";
import { SearchInput } from "@/components/molecules/SearchInput";
import { Select } from "@/components/molecules/Select";
import { Toolbar } from "@/components/molecules/Toolbar";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHomePage } from "./HomePage.hook";
import { HomeContainer, LoadMoreWrapper, PokemonGrid } from "./HomePage.styles";
import type { HomePageProps } from "./HomePage.types";

const typeOptions = [
  { label: "All types", value: "" },
  { label: "Fire", value: "fire" },
  { label: "Water", value: "water" },
  { label: "Grass", value: "grass" },
  { label: "Electric", value: "electric" },
  { label: "Psychic", value: "psychic" },
  { label: "Ice", value: "ice" },
  { label: "Dragon", value: "dragon" },
  { label: "Dark", value: "dark" },
  { label: "Fairy", value: "fairy" },
  { label: "Normal", value: "normal" },
  { label: "Fighting", value: "fighting" },
  { label: "Flying", value: "flying" },
  { label: "Poison", value: "poison" },
  { label: "Ground", value: "ground" },
  { label: "Rock", value: "rock" },
  { label: "Bug", value: "bug" },
  { label: "Ghost", value: "ghost" },
  { label: "Steel", value: "steel" },
];

export const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const {
    pokemon,
    loading,
    hasMore,
    searchQuery,
    selectedType,
    handleSearch,
    handleTypeFilter,
    handleLoadMore,
  } = useHomePage();

  return (
    <HomeContainer>
      <Header
        logo={<span style={{ fontWeight: 700, fontSize: 20 }}>Pokédex</span>}
        actions={
          <Button
            variant="GHOST"
            label=""
            icon={<Icon name={theme === "dark" ? "sun" : "moon"} />}
            onClick={toggleTheme}
          />
        }
      />

      <Toolbar>
        <SearchInput
          placeholder="Search by name or ID..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Select
          placeholder="All types"
          options={typeOptions}
          value={selectedType}
          onChange={handleTypeFilter}
        />
      </Toolbar>

      {loading && pokemon.length === 0 ? (
        <PokemonGrid>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} height={240} />
          ))}
        </PokemonGrid>
      ) : pokemon.length === 0 ? (
        <EmptyState
          title="No Pokémon found"
          description="Try a different search or filter"
          icon={<Icon name="search" />}
        />
      ) : (
        <>
          <PokemonGrid>
            {pokemon.map((p) => (
              <Card
                key={p.id}
                image={{ src: p.image, alt: p.name }}
                title={`#${String(p.id).padStart(3, "0")}`}
                subtitle={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                onClick={() => navigate(`/pokemon/${p.id}`)}
              >
                <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                  {p.types.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </Card>
            ))}
          </PokemonGrid>
          {hasMore && (
            <LoadMoreWrapper>
              <Button
                label="Load More"
                variant="PRIMARY"
                loading={loading}
                onClick={handleLoadMore}
              />
            </LoadMoreWrapper>
          )}
        </>
      )}
    </HomeContainer>
  );
};