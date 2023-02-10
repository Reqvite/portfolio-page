import WorkCard from "@/components/WorkCard";
import { buttons } from "@/data/filter";
import { variants } from "@/data/mainAnimationVariant";
import works, { workType } from "@/data/works";
import { Button, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { FC, useState } from "react";

const Works: FC = () => {
  const [filter, setFilter] = useState("");

  const renderFilterList = () => {
    const filterList = works.filter(({ fullDescription }) =>
      fullDescription.includes(filter)
    );
    return filterList;
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
        <Flex justifyContent="center" mb={4}>
          {buttons.map(({ title, filter }) => (
            <Button
              key={title}
              onClick={() => setFilter(filter)}
              mr={2}
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
            <SimpleGrid columns={2} spacing={10}>
              {renderFilterList().map((work: workType) => (
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
