import WorkCard from "@/components/WorkCard";
import works, { workType } from "@/data/works";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

const Works: FC = () => (
  <>
    <Head>
      <title>Works</title>
    </Head>
    <Container>
      <Heading as="h3" fontSize={25} textAlign="center" mb={5}>
        Works
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        {works.map((work: workType) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </SimpleGrid>
    </Container>
  </>
);

export default Works;
