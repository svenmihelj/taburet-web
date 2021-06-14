import { ChakraProvider } from "@chakra-ui/react";

import { ContentProvider } from "../context/ContentProvider";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ContentProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContentProvider>
  );
}

export default MyApp;
