const runtimeVersion = require("@babel/runtime/package.json").version;

module.exports = ({ env }) => ({
  targets: ">0.5%",
  assumptions: {
    // ArrayLikeIsIterable: true,
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
        modules: env("test") ? "commonjs" : false,
        useBuiltIns: "usage",
        corejs: 3,
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
    // Optional chaining and nullish coalescing are supported in @babel/preset-env,
    // but not yet supported in webpack due to support missing from acorn.
    // So we have to translate them for now, these can be removed once webpack has support.
    // See https://github.com/webpack/webpack/issues/10227
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
  ].filter(Boolean),
});
