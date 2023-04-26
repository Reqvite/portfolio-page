import { FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import NavbarItem from "../Header/NavbarItem";
import { navigation } from "@/data/navigation";

const MobileMenu: FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="disabled"
        bg="accentColor.100"
        ml={2}
      />
      <MenuList
        bg={useColorModeValue(
          "rgb(244, 248, 247, 0.8)",
          "rgba(32, 32, 35, 0.8)"
        )}
      >
        {navigation.map(({ id, title, path }) => (
          <NavbarItem key={id} title={title} path={path} />
        ))}
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
