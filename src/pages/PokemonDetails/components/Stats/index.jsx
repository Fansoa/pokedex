import {
  Case,
  ColumnContainer,
  Container,
  Label,
} from "@/src/pages/PokemonDetails/components/Stats/styled";
import PropTypes from "prop-types";
import { useCallback } from "react";

const Stats = ({ hp, attack, defense, speA, speD, speed }) => {
  const renderColumn = useCallback((label, stat) => {
    const Column = Array.from({ length: 15 }).map((_, i) => {
      if (i <= stat - 1) {
        // eslint-disable-next-line react/no-array-index-key
        return <Case key={`${label}-${i}`} isFilled />;
      }
      // eslint-disable-next-line react/no-array-index-key
      return <Case key={`${label}-${i}`} />;
    });
    return (
      <div key={`${label}`}>
        <ColumnContainer>{Column}</ColumnContainer>
        <Label>{label}</Label>
      </div>
    );
  }, []);

  return (
    <Container>
      {Object.entries({ hp, attack, defense, speA, speD, speed }).map(
        ([label, value]) => renderColumn(label, value),
      )}
    </Container>
  );
};

Stats.propTypes = {
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  speA: PropTypes.number,
  speD: PropTypes.number,
  speed: PropTypes.number,
};

Stats.defaultProps = {
  hp: null,
  attack: null,
  defense: null,
  speA: null,
  speD: null,
  speed: null,
};

export default Stats;
