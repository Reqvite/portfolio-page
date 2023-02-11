import { navigation } from "@/data/navigation";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";

import NavbarItem from "./NavbarItem";

const MobileMenu = () => {
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
      <MenuList>
        {navigation.map(({ id, title, path }) => (
          <NavbarItem key={id} title={title} path={path} />
        ))}
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
