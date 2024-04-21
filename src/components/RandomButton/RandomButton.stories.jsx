import RandomButton from "@/src/components/RandomButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/RandomButton",
  component: RandomButton,
};

export const RandomButtonStory = {
  name: "Default",
  args: {
    onClick: action("RandomButton is clicked"),
  },
};
