const Colors = {
  red: "#fc5c65",
  blue: "#4ECDC4",
  yellow: "#ffe66d",
  black: "#000",
  white: "#fff",
  gray: "#8D8B88",
  grayLight: "#E5E5E5",
  background: "#EFEFF4",
  primary: "#4ECDC4",
  secondary: "#ffe66d",
  tertiary: "#fc5c65",
};

const Fonts = {
  default: "source-sans",
  bold: "source-sans-bold",
};

export const Variables = {
  colors: {
    ...Colors,
    text: Colors.black,
    error: Colors.red,
    lightText: Colors.gray,
    headerText: Colors.white,
    ripple: "rgba(0, 0, 0, 0.1)",
    errorLight: Colors.red100,
  },
  textSizes: {
    xxxl: 29,
    xxl: 26,
    xl: 23,
    large: 20,
    medium: 18,
    default: 16,
    small: 14.22,
  },
  sizes: {
    xxxxl: 64,
    xxxl: 52,
    xxl: 32,
    xl: 24,
    large: 20,
    medium: 16,
    small: 12,
    xs: 8,
    xxs: 4,
    horizontalPadding: 16,
  },
  fonts: { ...Fonts },
};

export const DefaultStyles = {
  text: {
    fontSize: Variables.textSizes.default,
    fontFamily: Fonts.default,
    color: Variables.colors.text,
  },
};

export const DefaultNavigatorOptions = {
  screenOptions: {
    headerTintColor: Variables.colors.headerText,
    headerTitleStyle: {
      fontFamily: Fonts.bold,
    },
    tabBarLabelStyle: {
      fontFamily: Fonts.bold,
      fontSize: Variables.textSizes.small,
    },
  },
};
