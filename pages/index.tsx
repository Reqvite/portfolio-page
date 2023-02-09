import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  Tooltip,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import SkillsBox from "@/components/SkillsBox";

const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
      >
        <Text>
          Hello, I&apos;m junior full-stack web developer based in Ukraine!
        </Text>
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2">Vladyslav Yachyn</Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
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
              src="/IMG_3825.PNG"
              quality={100}
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
        <Heading as="h3" fontSize={25}>
          About
        </Heading>
        <Text>
          I am a Junior full-stack developer and looking for full-time position.
          Diligent and enthusiastic, I am interested in IT and everything in its
          orbit.
        </Text>
        <Box justifyItems="center" my={4}>
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
