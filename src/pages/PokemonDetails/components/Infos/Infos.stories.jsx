import Infos from "@/src/pages/PokemonDetails/components/Infos";

export default {
  title: "components/Infos",
  component: Infos,
};

export const InfosStory = {
  name: "Default",
  args: {
    weight: "90.5 kg",
    height: "1.7 m",
    abilities: "blaze, solar-power",
    description:
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  },
};
