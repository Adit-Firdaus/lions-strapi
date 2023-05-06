import favicon from "./extensions/favicon.png";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  head: {
    favicon: favicon,
  },
  theme: {
    light: {
      colors: {
        primary100: "#ffebc9",
        primary200: "#ffc65e",
        primary500: "#ff9800",
        buttonPrimary500: "#ff9800",
        primary600: "#ff7700",
        buttonPrimary600: "#ff7700",
        primary700: "#d65e00",
      },
    },
    light: {
      colors: {
        primary100: "#ffebc9",
        primary200: "#ffc65e",
        primary500: "#ff9800",
        buttonPrimary500: "#ff9800",
        primary600: "#ff7700",
        buttonPrimary600: "#ff7700",
        primary700: "#d65e00",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
