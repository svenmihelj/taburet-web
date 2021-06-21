import { ChakraProvider } from "@chakra-ui/react";

import { LanguageProvider } from "../context/LanguageProvider";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </LanguageProvider>
  );
}

export default MyApp;
