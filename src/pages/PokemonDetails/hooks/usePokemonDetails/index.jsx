import getEvolutionChain from "@/src/pages/PokemonDetails/hooks/usePokemonDetails/utils/methods/getEvolutionChain";
import makePokemonRequestList from "@/src/pages/PokemonDetails/hooks/usePokemonDetails/utils/methods/getRequestList";
import { useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "error": {
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };
    }

    case "success": {
      return {
        ...state,
        status: "resolved",
        data: action.data,
      };
    }

    case "started": {
      return {
        ...state,
        status: "pending",
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const usePokemonDetails = (name) => {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    data: null,
    error: null,
  });
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPokemon = async (pokemonName) => {
      try {
        const pokemonNameInLowercase = pokemonName.toLowerCase();
        dispatch({ type: "started" });
        const pokemonRequest = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonNameInLowercase}`,
        );

        if (!pokemonRequest.ok) {
          throw new Error(t("common:this.pokemon.does.not.exist"));
        }
        let pokemonResponse = await pokemonRequest.json();

        const speciesRequest = await fetch(pokemonResponse.species.url);
        const speciesResponse = await speciesRequest.json();

        const evolutionChainRequest = await fetch(
          speciesResponse.evolution_chain.url,
        );
        const evolutionChainReponse = await evolutionChainRequest.json();

        const evolutionChain = getEvolutionChain(evolutionChainReponse.chain);
        const evolutionChainPokemonRequestList =
          makePokemonRequestList(evolutionChain);

        const evolutionChainPokemonInfos = await Promise.all(
          evolutionChainPokemonRequestList,
        );

        pokemonResponse = {
          ...pokemonResponse,
          description: speciesResponse.flavor_text_entries[0].flavor_text,
          evolutionChainPokemonInfos,
        };

        dispatch({ type: "success", data: pokemonResponse });
      } catch (error) {
        dispatch({ type: "error", error: error.message });
      }
    };

    fetchPokemon(name);
  }, [t, name]);

  return state;
};

export default usePokemonDetails;
