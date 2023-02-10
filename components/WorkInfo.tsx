import { workType } from "@/data/works";
import {
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Badge,
} from "@chakra-ui/react";
import { FC } from "react";

const WorkInfo: FC<workType> = ({
  title,
  fullDescription,
  technologies,
  source,
  page,
  image,
}) => {
  return (
    <Container>
      <Stack mt="6" spacing="3">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text fontSize={16} textIndent="20px">
          {fullDescription}
        </Text>
        <Link href={page}>
          <Badge bg="accentColor.100" mr={2}>
            Website:
          </Badge>
          {page}
        </Link>
        <Link href={source}>
          <Badge bg="accentColor.100" mr={2}>
            Source:
          </Badge>
          {source}
        </Link>
        <Text>
          <Badge bg="accentColor.100" mr={2}>
            Stack:
          </Badge>
          {technologies}
        </Text>
        <Image
          src={image}
          alt="Website preview"
          borderRadius="5px"
          width="500"
          height="300"
          objectFit="cover"
        />
      </Stack>
    </Container>
  );
};

export default WorkInfo;
