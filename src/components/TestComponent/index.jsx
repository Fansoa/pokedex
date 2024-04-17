import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./styled";

const TestComponent = ({ variant }) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const { t, i18n } = useTranslation();

  const languagesOptions = [
    { label: t("glossary:english"), value: "en" },
    { label: t("glossary:french"), value: "fr" },
  ];

  return (
    <Container variant={variant}>
      <p>TestComponent</p>
      <button
        type="button"
        onClick={() => {
          setIsDisplay((curr) => !curr);
        }}
      >
        {t("common:display.the.text")}
      </button>
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
      >
        {languagesOptions.map(({ label, value }) => (
          <option key={`language-option-${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      {isDisplay && <p>Lorem Ipsum</p>}

      {t("glossary:current.language")}
    </Container>
  );
};

TestComponent.propTypes = {
  variant: PropTypes.oneOf(["bleu", "rouge"]),
};

TestComponent.defaultProps = {
  variant: "bleu",
};

export default TestComponent;
