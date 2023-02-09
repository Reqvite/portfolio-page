import type { AppProps } from "next/app";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Layout from "@/components/Layot";
import theme from "@/theme/globalTheme";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <main>
          <Component {...pageProps} key={router.route} />
        </main>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
