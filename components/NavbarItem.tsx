import { Link, Text, textDecoration } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type NavbarItemType = {
  title: string;
  path: string;
};

const NavbarItem: FC<NavbarItemType> = ({ path, title }) => {
  const { pathname } = useRouter();
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
