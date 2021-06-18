import { ChakraProvider } from "@chakra-ui/react";

import { ContentProvider } from "../context/ContentProvider";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
