import { Link, useParams } from "react-router-dom";
import { useCallback } from "react";
import usePokemonDetails from "@/src/pages/PokemonDetails/hooks/usePokemonDetails";
import Layout from "@/src/pages/Layout";
import {
  BottomContainer,
  CustomLayout,
  Illustration,
  PokemonName,
  StatisticsContainer,
  TopContainer,
  TypesContainer,
} from "@/src/pages/PokemonDetails/styled";
import BackIcon from "@/src/pages/PokemonDetails/icons/BackIcon";
import Stats from "@/src/pages/PokemonDetails/components/Stats";
import Infos from "@/src/pages/PokemonDetails/components/Infos";
import Type from "@/src/pages/PokemonDetails/components/Type";
import EvolutionChain from "@/src/pages/PokemonDetails/components/EvolutionChain";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { status, data, error } = usePokemonDetails(name);

  const getStatValue = useCallback(({ index, data }) => {
    return (15 / 100) * ((data.stats[index].base_stat / 255) * 100);
  }, []);

  if (data) {
    const isMonoElem = data.types.length === 1;

    return (
      <CustomLayout>
        <TopContainer>
          <Link to="/">
            <BackIcon />
          </Link>
          <PokemonName>{`${name} #${data.id}`}</PokemonName>
          <span />
        </TopContainer>
        <BottomContainer>
          <StatisticsContainer>
            <Stats
              hp={getStatValue({ index: 0, data })}
              attack={getStatValue({ index: 1, data })}
              defense={getStatValue({ index: 2, data })}
              speA={getStatValue({ index: 3, data })}
              speD={getStatValue({ index: 4, data })}
              speed={getStatValue({ index: 5, data })}
            />
            <div>
              <Illustration
                src={data.sprites.other["official-artwork"].front_default}
                alt={`illustration-${name}`}
              />
              <TypesContainer isMonoElem={isMonoElem}>
                {data.types.map(({ type }) => {
                  // eslint-disable-next-line no-shadow
                  const { name } = type;
                  return <Type key={name} type={name} />;
                })}
              </TypesContainer>
            </div>
            <Infos
              weight={`${data.weight / 10} kg`}
              height={`${data.height / 10} m`}
              abilities={`${data.abilities.map(({ ability }) => ` ${ability.name}`)}`}
              description={data.description}
            />
          </StatisticsContainer>
          <EvolutionChain
            pokemonList={data.evolutionChainPokemonInfos}
            type={data.types[0].type.name}
          />
        </BottomContainer>
      </CustomLayout>
    );
  }

  return <Layout />;
};

export default PokemonDetailsPage;
