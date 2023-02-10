import { workType } from "@/data/works";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

const WorkCard: FC<workType> = ({ id, title, description, image }) => {
  let cutDescription: string;
  if (description.split(" ").length >= 16) {
    cutDescription = description.split(" ").slice(0, 16).join(" ") + "...";
  } else {
    cutDescription = description;
  }

  return (
    <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
      <Link href={`/works/${id}`}>
        <Card maxW="sm" height="330" bg="accentColor.100">
          <CardBody>
            <Image
              src={image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width="230"
              height="120"
              objectFit="cover"
            />
            <Stack mt="6" spacing="3">
              <Heading as="h4" size="md" textAlign="center">
                {title}
              </Heading>
              <Text display="block" fontSize={16} textAlign="center">
                {cutDescription}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </motion.a>
  );
};

export default WorkCard;
