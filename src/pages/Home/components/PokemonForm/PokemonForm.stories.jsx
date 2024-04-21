import PokemonForm from "@/src/pages/Home/components/PokemonForm";
import FormProviderForStoryAndTest from "@/src/providers/FormProviderForStoryAndTest";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/PokemonForm",
  component: PokemonForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <FormProviderForStoryAndTest>
          <Story />
        </FormProviderForStoryAndTest>
      </BrowserRouter>
    ),
  ],
};

export const PokemonFormStory = {
  name: "Default",
};
