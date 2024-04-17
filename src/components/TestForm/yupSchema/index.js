import * as yup from "yup";
import i18next from "i18next";

const testSchema = yup
  .object({
    test: yup
      .string()
      .min(4, () =>
        i18next.t("errorValidation:must.be.at.least.{{number}}.characters", {
          number: 4,
        }),
      )
      .max(8, () =>
        i18next.t("errorValidation:must.be.at.most.{{number}}.characters", {
          number: 8,
        }),
      ),
  })
  .required();

export default testSchema;
