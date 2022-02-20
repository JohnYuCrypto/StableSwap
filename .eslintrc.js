module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "standard",
    "plugin:prettier/recommended",
    // "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["node_modules", "types"],
      },
    },
  },
};
