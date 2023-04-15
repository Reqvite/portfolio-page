import { FC } from "react";
import { motion } from "framer-motion";
import { Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type NavbarItemType = {
  title: string;
  path: string;
};

const NavbarItem: FC<NavbarItemType> = ({ path, title }) => {
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");
  const { pathname } = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={isLargerThan560 ? {} : { marginTop: "10px", marginLeft: "10px" }}
    >
      <Link
        as={NextLink}
        href={path}
        bg={pathname === path ? "accentColor.100" : "transparent"}
        p={2}
        style={{ textDecoration: "none" }}
        borderRadius={5}
      >
        {title}
      </Link>
    </motion.div>
  );
};
export default NavbarItem;
