import { WorkI } from "@/data/works";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";

const WorkInfo: FC<WorkI> = ({
  title,
  fullDescription,
  technologies,
  source,
  backendSource,
  page,
  image,
  bigPage,
}) => {
  const router = useRouter();

  return (
    <Container mt="80px">
      <Stack mt="6" spacing="3">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="disabled"
              onClick={() => router.back()}
            >
              Back
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Heading as="h4" size="md">
              {title}
            </Heading>
          </BreadcrumbItem>
        </Breadcrumb>

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
        {bigPage && (
          <Link href={backendSource}>
            <Badge bg="accentColor.100" mr={2}>
              Backend source:
            </Badge>
            {backendSource}
          </Link>
        )}
        <Text>
          <Badge bg="accentColor.100" mr={2}>
            Stack:
          </Badge>
          {technologies}
        </Text>
        <Image
          src={image.src}
          alt="Website preview"
          borderRadius="5px"
          width="500"
          height="300"
          placeholder="blur"
          objectFit="contain"
          cursor="pointer"
          onClick={() => window.open(image.src, "_blank")}
        />
      </Stack>
    </Container>
  );
};

export default WorkInfo;
