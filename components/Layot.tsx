import { variants } from "@/data/mainAnimationVariant";
import { Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: ReactNode;
  router: any;
};

const Layout: FC<layoutProps> = ({ children, router }) => (
  <>
    <Flex minH="calc(100vh - 66px)" flexDirection="column">
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
    </Flex>
    <Footer />
  </>
);

export default Layout;
