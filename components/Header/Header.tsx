import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header: FC = () => (
  <Box as="header">
    <Navbar />
  </Box>
);

export default Header;
