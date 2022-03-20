// EXAMPLE:
// import '../src/styles/main.less';

// MY STYLES:
// import '../src/styles/App.less';

// EXAMPLE:
import themeVariables from '!!raw-loader!../src/styles/variables.less';

// Scott:
// import '!style-loader!css-loader!less-loader!../src/styles/overrides.less';
// import '!style-loader!css-loader!less-loader!../src/styles/App.less';

// MY STYLES:
// import themeVariables from '!!raw-loader!../src/styles/App.less';
// import themeVariables from '!!raw-loader!../src/styles/theme/base.less';

// copied from existing library:
// import '!style-loader!css-loader!../src/index.module.css';
// import '!style-loader!css-loader!../src/styles/App.less';

export const parameters = {
  customizeAntdTheme: {
    modifyVars: themeVariables,
    // modifyVars: {
      // '@primary-color': '#1DA57A'
    // }
  },
}
