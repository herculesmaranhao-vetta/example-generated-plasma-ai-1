import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Progress } from "@/components/atoms/Progress";
import { Skeleton } from "@/components/atoms/Skeleton";
import { Tabs } from "@/components/atoms/Tabs";
import { Tag } from "@/components/atoms/Tag";
import { EmptyState } from "@/components/molecules/EmptyState";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDetailPage } from "./DetailPage.hook";
import {
  DetailContainer,
  EvolutionArrow,
  EvolutionCard,
  EvolutionContainer,
  HeroImage,
  HeroSection,
  InfoSection,
  StatLabel,
  StatRow,
} from "./DetailPage.styles";
import type { DetailPageProps } from "./DetailPage.types";

const typeColors: Record<string, string> = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
};

export const DetailPage: React.FC<DetailPageProps> = () => {
  const navigate = useNavigate();
  const { pokemon, loading, error, activeTab, handleTabChange } = useDetailPage();

  if (loading) {
    return (
      <DetailContainer>
        <div style={{ padding: 24 }}>
          <Skeleton height={300} />
        </div>
      </DetailContainer>
    );
  }

  if (error || !pokemon) {
    return (
      <DetailContainer>
        <EmptyState
          title="Pokémon not found"
          description="This Pokémon may have escaped!"
          icon={<Icon name="question-circle" />}
          action={
            <Button label="Back to Pokédex" variant="PRIMARY" onClick={() => navigate("/")} />
          }
        />
      </DetailContainer>
    );
  }

  const primaryType = pokemon.types[0];
  const bgColor = typeColors[primaryType] ?? "#A8A878";

  const tabItems = [
    {
      key: "about",
      label: "About",
      children: (
        <InfoSection>
          <p><strong>Description:</strong> {pokemon.flavorText}</p>
          <p><strong>Height:</strong> {(pokemon.height / 10).toFixed(1)} m</p>
          <p><strong>Weight:</strong> {(pokemon.weight / 10).toFixed(1)} kg</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
        </InfoSection>
      ),
    },
    {
      key: "stats",
      label: "Base Stats",
      children: (
        <InfoSection>
          {pokemon.stats.map((stat) => (
            <StatRow key={stat.name}>
              <StatLabel>{stat.name.replace("-", " ")}</StatLabel>
              <Progress value={stat.value} max={255} />
            </StatRow>
          ))}
        </InfoSection>
      ),
    },
    {
      key: "evolution",
      label: "Evolution Chain",
      children: (
        <InfoSection>
          {pokemon.evolutionChain.length > 0 ? (
            <EvolutionContainer>
              {pokemon.evolutionChain.map((evo, idx) => (
                <React.Fragment key={evo.id}>
                  {idx > 0 && <EvolutionArrow>→</EvolutionArrow>}
                  <EvolutionCard onClick={() => navigate(`/pokemon/${evo.id}`)}>
                    {evo.image ? (
                      <img src={evo.image} alt={evo.name} loading="lazy" />
                    ) : (
                      <div style={{ width: 96, height: 96, background: "#eee", borderRadius: 8 }} />
                    )}
                    <p>{evo.name}</p>
                  </EvolutionCard>
                </React.Fragment>
              ))}
            </EvolutionContainer>
          ) : (
            <p>Evolution data not available.</p>
          )}
        </InfoSection>
      ),
    },
  ];

  return (
    <DetailContainer>
      <div style={{ padding: "12px 24px" }}>
        <Button
          label="Back"
          variant="GHOST"
          icon={<Icon name="arrow-left" />}
          onClick={() => navigate("/")}
        />
      </div>

      <HeroSection $bgColor={bgColor}>
        <h1 style={{ margin: 0, textTransform: "capitalize" }}>
          {pokemon.name} <span style={{ fontWeight: 400 }}>#{String(pokemon.id).padStart(3, "0")}</span>
        </h1>
        <HeroImage>
          <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
        </HeroImage>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {pokemon.types.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </HeroSection>

      <Tabs items={tabItems} activeKey={activeTab} onChange={handleTabChange} />
    </DetailContainer>
  );
};