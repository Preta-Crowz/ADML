module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@": "./src",
          "@core": "./src/core",
          "@mod": "./src/modules"
        }
      }
    ]
  ]
};
