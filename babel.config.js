const runtimeVersion = require("@babel/runtime/package.json").version;
const corejsVersion = require('core-js/package.json').version;

module.exports = ({ env }) => ({
  assumptions: {
    constantReexports: true,
    constantSuper: true,
    enumerableModuleMeta: true,
    ignoreFunctionLength: true,
    ignoreToPrimitiveHint: true,
    iterableIsArray: true,
    mutableTemplateObject: true,
    noClassCalls: true,
    noDocumentAll: true,
    noNewArrows: true,
    objectRestNoSymbols: true,
    privateFieldsAsProperties: true,
    pureGetters: true,
    setClassMethods: true,
    setComputedProperties: true,
    setPublicClassFields: true,
    setSpreadProperties: true,
    skipForOfIteratorClosing: true,
    superIsCallableConstructor: true,
  },
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "70",
          ie: "11",
        },
        modules: env("test") ? "commonjs" : false,
        useBuiltIns: "usage",
        corejs: corejsVersion,
        bugfixes: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    env("development") && "react-refresh/babel",
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: false,
        version: runtimeVersion,
      },
    ],
  ].filter(Boolean),
});
