import "./App.css";

import ComingSoon from "./components/ComingSoon";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "./assets/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ComingSoon />
    </ChakraProvider>
  );
}

export default App;
