module.exports = {
  input: ["src/**/*.{js,jsx}"],
  output: "./",
  options: {
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx"],
    },
    lngs: ["en", "fr"],
    ns: ["common", "errorValidation", "glossary"],
    defaultNs: "common",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      loadPath: "./services/i18next/translations/{{lng}}/{{ns}}.json",
      savePath: "./services/i18next/translations/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    keySeparator: false,
  },
};
