import RandomButton from "@/src/components/RandomButton";
import SubmitButton from "@/src/components/SubmitButton";
import TextInputController from "@/src/components/TextInputController";
import usePokemonForm from "@/src/pages/Home/components/PokemonForm/hooks/usePokemonForm";
import {
  ButtonContainer,
  Container,
  Pokeball,
} from "@/src/pages/Home/components/PokemonForm/styled";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import pokeball from "@/src/assets/pokeball.png";

import { useEffect } from "react";

const PokemonForm = () => {
  const { methods, onPokemonSubmit, onRandomPokemonSubmit, state } =
    usePokemonForm();
  const { t } = useTranslation();

  useEffect(() => {
    if (state.status === "rejected") {
      methods.setError("pokemonName", {
        type: "Status code 400",
        message: state.error,
      });
    }
  }, [methods, state]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <Container>
        <Pokeball src={pokeball} />
        <TextInputController label="pokemon name or id" name="pokemonName" />
        <ButtonContainer>
          <SubmitButton label={t("commom:search")} onClick={onPokemonSubmit} />
          <RandomButton onClick={onRandomPokemonSubmit} />
        </ButtonContainer>
      </Container>
    </FormProvider>
  );
};

export default PokemonForm;
