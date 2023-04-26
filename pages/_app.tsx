import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layot";
import theme from "@/theme/globalTheme";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatedBackground />
        <main>
          <Component {...pageProps} key={router.route} />
        </main>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
