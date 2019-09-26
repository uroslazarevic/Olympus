module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: "off",
    avoidEscape: true,
    "no-underscore-dangle": "off",
    "comma-dangle": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
