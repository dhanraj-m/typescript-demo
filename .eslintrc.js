const path = require("path");
module.exports = {
  parserOptions: {
    project: path.resolve(__dirname, "tsconfig.json"),
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
      "eslint:recommended",
      "plugin:@typescript-eslint/all",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "babel",
    "prettier",
    "sort-imports-es6-autofix",
    "sort-keys-fix",
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "prettier/prettier": "error",
    "no-duplicate-imports": "error",
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-template-curly-in-string": "error",
    "require-atomic-updates": "error",
    "accessor-pairs": "error",
    "consistent-return": "error",
    curly: "error",
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", { props: true }],
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "off", // Handled by @typescript-eslint/no-use-before-define
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    radix: "error",
    "require-unicode-regexp": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    yoda: "error",
    "no-label-var": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "location",
        message: "Use 'location' from react-router, or window.location instead",
      },
    ],
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "impossible", varsIgnorePattern: "React" }],
    "consistent-this": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "linebreak-style": ["error", "unix"],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-tabs": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "prefer-object-spread": "error",
    "spaced-comment": "error",
    "arrow-parens": ["error", "as-needed"],
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "off", // Handled by @typescript-eslint/no-useless-constructor
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "symbol-description": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }, // replaces newline-before-return
      { blankLine: "never", prev: "import", next: "import" },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
      },
    ],
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": ["error", { ignoreRhs: true }],
    "@typescript-eslint/no-untyped-public-signature": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off", // After discussion with team, we're not happy with the safety of this rule, so it's off

    // To turn on with some discussion and effort
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  }
}