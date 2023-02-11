import { Container, Heading } from "@chakra-ui/react";
import { FC } from "react";

const Error: FC = () => (
  <Container>
    <Heading as="h2" mt="80px" textAlign="center">
      Sorry, page not found 404.
    </Heading>
  </Container>
);

export default Error;
