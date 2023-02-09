import { Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: ReactNode;
  router: any;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout: FC<layoutProps> = ({ children, router }) => (
  <Flex height="100vh" flexDirection="column">
    <Header />
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    <Footer />
  </Flex>
);

export default Layout;
