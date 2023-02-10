import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FC } from "react";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import ToggleThemeButton from "./ToggleThemeButton";

type Page = {
  id: number;
  title: string;
  path: string;
};

const navigation: Page[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Works", path: "/works" },
];

const Navbar: FC = () => {
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
      <Container display="flex" p={2} maxW="container.md" alignItems="center">
        <Heading as="h1">{/* <Logo/> */}Portfolio</Heading>
        <HStack fontSize={16} ml={10} fontWeight={700} p={5}>
          {navigation.map(({ id, title, path }) => (
            <NavbarItem key={id} title={title} path={path} />
          ))}
        </HStack>
        <Box ml="auto">
          <ToggleThemeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
