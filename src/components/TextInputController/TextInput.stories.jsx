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
