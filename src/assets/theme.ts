import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#7B3284",
    secondary: "#F4E2EF",
    tertiary: "#212047",
  },
  fonts: {
    heading: `'IBM Plex Mono', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  },
});

export default theme;
