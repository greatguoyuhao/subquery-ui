module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../node_modules/storybook-addon-customize-antd-theme/dist/esm/stories/index.js",
  ],
  addons: [
    // {
    //   name: 'storybook-preset-less',
    //   options: {
    //     cssLoaderOptions: {
    //        modules: true,
    //        localIdentName: '[name]__[local]--[hash:base64:5]',
    //     },
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         strictMath: false,
    //         noIeCompat: true,
    //         relativeUrls: false,
    //       },
    //     },
    //   }
    // },
    // "storybook-preset-less",
    "storybook-addon-customize-antd-theme",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
    {
      name: 'storybook-preset-less',
      options: {
        cssLoaderOptions: {
           modules: true,
          //  localIdentName: '[name]__[local]--[hash:base64:5]',
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
            // strictMath: false,
            // noIeCompat: true,
            // relativeUrls: false,
          },
        },
      }
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return {
      ...config,
    };
  },
};
