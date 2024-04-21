import SubmitButton from "@/src/components/SubmitButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/SubmitButton",
  component: SubmitButton,
};

export const SubmitButtonStory = {
  name: "default",
  args: {
    label: "Search !",
    onClick: action("Button is clicked"),
  },
};
