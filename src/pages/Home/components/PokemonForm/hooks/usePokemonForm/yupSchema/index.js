import * as yup from "yup";
import i18next from "i18next";

const pokemonSchema = yup.object({
  pokemonName: yup
    .string()
    .min(2, () =>
      i18next.t("errorValidation:must.be.at.least.{{number}}.characters", {
        number: 2,
      }),
    )
    .max(100, () =>
      i18next.t("errorValidation:must.be.at.most.{{number}}.characters", {
        number: 100,
      }),
    )
    .required(() => i18next.t("errorValidation:this.field.is.required")),
});

export default pokemonSchema;
