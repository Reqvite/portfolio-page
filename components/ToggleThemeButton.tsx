import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

const ToggleThemeButton: FC<any> = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <IconButton
          aria-label="Toggle theme"
          bg={useColorModeValue("accentColor.100", "yellow.500")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          variant="disabled"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleThemeButton;
