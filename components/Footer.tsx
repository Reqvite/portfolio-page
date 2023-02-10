import { Box, LinkBox, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => (
  <Box as="footer" textAlign="center">
    <Text p={5}>
      &copy; {new Date().getFullYear()}{" "}
      <Link href="https://github.com/Reqvite" isExternal>
        Vladyslav Yachyn.
      </Link>{" "}
      All Rights Reserved.
    </Text>
  </Box>
);

export default Footer;
