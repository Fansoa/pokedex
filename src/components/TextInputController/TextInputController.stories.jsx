import TextInputController from "@/src/components/TextInputController";
import FormProviderForStoryAndTest from "@/src/providers/FormProviderForStoryAndTest";

export default {
  title: "Components/TextInputController",
  component: TextInputController,
  decorators: [
    (Story) => (
      <FormProviderForStoryAndTest>
        <Story />
      </FormProviderForStoryAndTest>
    ),
  ],
};

export const TextInputControllerStory = {
  name: "Default",
  args: {
    name: "inputName",
  },
};

export const TextInputControllerStoryWithLabel = {
  name: "With label",
  args: {
    name: "inputName",
    label: "Pokemon name or id",
  },
};

export const TextInputControllerStoryWithErrorMessage = {
  name: "With error message",
  args: {
    name: "inputName",
    label: "Pokemon name or id",
    errorMessage: "Message d'erreur",
  },
};
