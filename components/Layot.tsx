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
  hidden: { opacity: 0, x: 0, y: 15 },
  enter: { opacity: 1, x: 0, y: 10 },
  exit: { opacity: 0, x: -0, y: 30 },
};

const Layout: FC<layoutProps> = ({ children, router }) => (
  <Flex height="100vh" flexDirection="column" justifyContent="space-between">
    <Header />
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    <Footer />
  </Flex>
);

export default Layout;
