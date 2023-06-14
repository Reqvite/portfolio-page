import WorkCard from "@/components/Work/WorkCard";
import { buttons } from "@/data/filter";
import { variants } from "@/data/mainAnimationVariant";
import works, { WorkI } from "@/data/works";
import {
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

 function getWorks () {
  const data = works;

  return data
}
const Works =  () => {
  const works =  getWorks()
  const [allWorks] = useState<WorkI[]>(works);
  const [filter, setFilter] = useState<any>("all");
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");

  const renderFilterList = () => {
    if (typeof filter === "string") {
      return allWorks;
    } else {
      const filterList = allWorks.filter(
        ({ teamProject }) => teamProject === filter
      );
      return filterList;
    }
  };

  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <Container>
        <Heading as="h3" fontSize={25} textAlign="center" mb={5} mt="80px">
          Works
        </Heading>
        <Flex justifyContent="center" mb={4} flexWrap="wrap">
          {buttons.map(({ title, filter }) => (
            <Button
              key={title}
              as={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filter)}
              mr={2}
              mt={2}
              bg="accentColor.100"
              variant="disabled"
            >
              {title}
            </Button>
          ))}
        </Flex>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.35 }}
          >
            <SimpleGrid
              columns={isLargerThan560 ? 2 : 1}
              spacing={10}
              justifyItems="center"
            >
              {renderFilterList().map((work: WorkI) => (
                <WorkCard key={work.id} {...work} />
              ))}
            </SimpleGrid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Works;
