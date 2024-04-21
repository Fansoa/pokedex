import pokemonSchema from "@/src/pages/Home/components/PokemonForm/hooks/usePokemonForm/yupSchema";
import getRandomInt from "@/src/pages/Home/components/PokemonForm/utils/methods/getRandomInt";
import { yupResolver } from "@hookform/resolvers/yup";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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

const usePokemonForm = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    status: "idle",
    data: null,
    error: null,
  });
  const navigate = useNavigate();
  const { t } = useTranslation();

  const methods = useForm({
    resolver: yupResolver(pokemonSchema),
    reValidateMode: "onSubmit",
  });

  const fetchPokemon = async ({ pokemonName }) => {
    const pokemonNameInLowercase = pokemonName.toLowerCase();
    try {
      dispatch({ type: "started" });
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNameInLowercase}`,
      );

      if (!response.ok) {
        throw new Error(t("common:this.pokemon.does.not.exist"));
      }
      const data = await response.json();
      const { name } = data;

      navigate(`/pokemon/${name}`);
      dispatch({ type: "success", data });
    } catch (error) {
      dispatch({ type: "error", error: error.message });
    }
  };

  const fetchRandomPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.",
    );
    const data = await response.json();

    const randomIndex = getRandomInt(data.count);
    const { name } = data.results[randomIndex];

    navigate(`/pokemon/${name}`);
  };

  return {
    methods,
    onPokemonSubmit: methods.handleSubmit(fetchPokemon),
    onRandomPokemonSubmit: fetchRandomPokemon,
    state,
  };
};

export default usePokemonForm;
