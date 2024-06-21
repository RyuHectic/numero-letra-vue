const rules = {
  strict: ["error", "global"],
  quotes: ["error", "single", { allowTemplateLiterals: true, avoidEscape: true }],
  //camelcase: ["error", { properties: "always", ignoreDestructuring: false }],
  curly: ["error", "all"],
  "dot-notation": ["error", { allowKeywords: true }],
  "no-multi-spaces": [
    "error",
    { exceptions: { Property: false }, ignoreEOLComments: false },
  ],
  "no-restricted-syntax": "off",
  "no-await-in-loop": "off",
  "no-param-reassign": "off",
  "no-loop-func": "off",
  "no-console": ["error", { allow: ["info", "warn", "error"] }],
  "brace-style": ["error", "1tbs", { allowSingleLine: true }],
  "padding-line-between-statements": [
    "error",
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    },
    { blankLine: "always", prev: "*", next: "block-like" },
    { blankLine: "always", prev: "block-like", next: "*" },
  ],
  "padded-blocks": ["error", "never"],
  "object-curly-spacing": ["error", "always"],
  "comma-dangle": ["error", "only-multiline"],
  "comma-spacing": ["error", { before: false, after: true }],
  "function-paren-newline": ["error", "consistent"],
  "eol-last": ["error", "always"],
  "prefer-const": "error",
  "no-var": "error",
  "space-before-function-paren": [
    "error",
    { anonymous: "always", named: "never", asyncArrow: "always" },
  ],
  "space-before-blocks": ["error", "always"],
  "keyword-spacing": ["error", { before: true, after: true }],
  "arrow-spacing": ["error", { before: true, after: true }],
  "no-self-assign": ["error", { props: true }],
  "space-infix-ops": ["error", { int32Hint: false }],
  "no-underscore-dangle": "off",
  "no-multiple-empty-lines": "error",
  "object-shorthand": [
    "error",
    "always",
    { avoidQuotes: true, ignoreConstructors: true },
  ],
  "no-useless-concat": "error",
  "block-spacing": ["error", "always"],

  // Vue Specific Rules
  "vue/component-tags-order": [
    "error",
    {
      order: ["script", "template", "style"],
    },
  ],
  "vue/attributes-order": ["error", { alphabetical: true }],
  "vue/html-quotes": ["error", "double"],
  "vue/mustache-interpolation-spacing": ["error", "always"],
  "vue/no-unused-components": "error",
  "vue/object-shorthand": ["error", "always", { avoidQuotes: true }],
  "vue/eqeqeq": ["error", "always"],
  "vue/dot-notation": ["error", { allowKeywords: true }],
  "vue/brace-style": ["error", "1tbs", { allowSingleLine: true }],
  "vue/block-spacing": ["error", "always"],
  "vue/arrow-spacing": ["error", { before: true, after: true }],
  "vue/array-bracket-newline": ["error", { multiline: true, minItems: 2 }],
  "vue/padding-line-between-blocks": ["error", "always"],
  "vue/no-unused-refs": "error",
  "vue/no-unused-properties": "off",
  "vue/no-this-in-before-route-enter": "error",
  "vue/no-static-inline-styles": "error",
  "vue/no-ref-object-destructure": "error",
  "vue/no-multiple-objects-in-class": "error",
  "vue/no-empty-component-block": "error",
  "vue/new-line-between-multi-line-property": "error",
  "vue/match-component-import-name": "error",
  "vue/match-component-file-name": [
    "error",
    {
      extensions: ["ts,js,vue"],
      shouldMatchCase: false,
    },
  ],
  "vue/define-props-declaration": ["error", "type-based"],
  "vue/define-macros-order": [
    "error",
    {
      order: ["defineProps", "defineEmits"],
    },
  ],
  "vue/define-emits-declaration": ["error", "type-based"],
  "vue/custom-event-name-casing": ["error", "camelCase"],
  "vue/component-options-name-casing": ["error", "kebab-case"],
  "vue/component-name-in-template-casing": [
    "error",
    "kebab-case",
    {
      registeredComponentsOnly: true,
    },
  ],
  "vue/component-api-style": ["error", ["script-setup"]],
  "vue/block-lang": [
    "error",
    {
      script: {
        lang: "ts",
      },
    },
  ],
  "vue/require-explicit-emits": "error",
  "vue/multiline-html-element-content-newline": [
    "error",
    {
      ignoreWhenEmpty: true,
      ignores: ["pre", "textarea"],
      allowEmptyLines: false,
    },
  ],
  "vue/max-attributes-per-line": [
    "error",
    {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    },
  ],
  "vue/html-indent": [
    "error",
    2,
    {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    },
  ],
  "vue/no-multi-spaces": ["error", { ignoreProperties: false }],
  "vue/html-end-tags": "error",
  "vue/no-v-for-template-key-on-child": "error",
};

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.vue' ]
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'standard'

  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue'

  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  // add your custom rules here
  rules: {

    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',

    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // The core 'import/named' rules
    // does not work with type definitions
    'import/named': 'off',

    'prefer-promise-reject-errors': 'off',

    //quotes: ['warn', 'single', { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    ...rules
  }
}
