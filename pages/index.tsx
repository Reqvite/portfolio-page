import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import SkillsBox from "@/components/SkillsBox";
import profilePhoto from "../public/images/profile/profile.png";
const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Container overflow="hidden">
      <Box display={{ md: "flex" }} mt="80px">
        <Box flexGrow={1}>
          <Heading as="h2" mb={3}>
            Vladyslav Yachyn
          </Heading>
          <p>Junior full-stack web developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={profilePhoto}
              quality={75}
              alt="Profile image"
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="/"
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Heading as="h3" fontSize={25} mb={5}>
          About
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
        >
          <Text textIndent="20px">
            I&apos;m junior full-stack web developer based in Ukraine! I&apos;m
            interested in IT and everything in its orbit.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" my={4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              variant="disabled"
            >
              My portfolio
            </Button>
          </motion.button>
        </Box>
      </Box>
      <SkillsBox />
    </Container>
  </>
);

export default Home;
