import { workType } from "@/data/works";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const WorkCard: FC<workType> = ({ id, title, description, image }) => {
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");
  let cutDescription: string;
  if (description.split(" ").length >= 16) {
    cutDescription = description.split(" ").slice(0, 16).join(" ") + "...";
  } else {
    cutDescription = description;
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
      <Link href={`/works/${id}`}>
        <Card maxW="sm" height="330" bg="accentColor.100">
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={isLargerThan560 ? "231px" : "300px"}
          >
            <Image
              quality={100}
              src={image}
              alt="Green double couch with wooden legs"
              width="250"
              height="98"
              style={{
                borderRadius: "10px",
                height: "auto",
              }}
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
    </motion.div>
  );
};

export default WorkCard;
