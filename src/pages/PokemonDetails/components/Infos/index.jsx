import {
  Container,
  CustomInfo,
  DescriptionContainer,
  Info,
  Label,
  LabelInfoContainer,
} from "@/src/pages/PokemonDetails/components/Infos/styled";
import PropTypes from "prop-types";

const Infos = ({ weight, height, abilities, description }) => {
  return (
    <Container>
      <LabelInfoContainer>
        <Label>Weight</Label>
        <Info>{weight}</Info>
      </LabelInfoContainer>
      <LabelInfoContainer>
        <Label>Height</Label>
        <Info>{height}</Info>
      </LabelInfoContainer>
      <LabelInfoContainer>
        <Label>Abilities</Label>
        <CustomInfo>{abilities}</CustomInfo>
      </LabelInfoContainer>
      <DescriptionContainer>
        <Label>Description</Label>
        <Info>{description}</Info>
      </DescriptionContainer>
    </Container>
  );
};

Infos.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  abilities: PropTypes.string,
  description: PropTypes.string,
};

Infos.defaultProps = {
  weight: null,
  height: null,
  abilities: null,
  description: null,
};

export default Infos;
