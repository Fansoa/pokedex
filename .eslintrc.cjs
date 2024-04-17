module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        map: [
          ["@", "."],
          ["", "./public"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "no-console": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["./configs/**/**.**"],
      },
    ],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "import/no-absolute-path": 0,
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
