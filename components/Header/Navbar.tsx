import { navigation } from "@/data/navigation";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

import { FC } from "react";
import MobileMenu from "../ui/MobileMenu";
import NavbarItem from "./NavbarItem";
import ToggleThemeButton from "../ui/ToggleThemeButton";

import NextLink from "next/link";
import { motion } from "framer-motion";
const Navbar: FC = () => {
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue(
        "rgba(250, 250, 250, 0.7)",
        "rgba(32, 32, 35, 0.9)"
      )}
      css={{ backdropFilter: "blur(4px)" }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h1">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
            <Text as={NextLink} href="/" p={2} borderRadius={5}>
              Portfolio
            </Text>
          </motion.div>
        </Heading>
        {isLargerThan560 ? (
          <>
            <HStack fontSize={16} ml={10} fontWeight={700} p={5}>
              {navigation.map(({ id, title, path }) => (
                <NavbarItem key={id} title={title} path={path} />
              ))}
            </HStack>
            <Box ml="auto">
              <ToggleThemeButton />
            </Box>
          </>
        ) : (
          <Flex>
            <ToggleThemeButton />
            <MobileMenu />
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
