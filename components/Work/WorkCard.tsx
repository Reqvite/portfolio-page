import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { WorkI } from "@/data/works";
import { HiUser, HiUserGroup } from "react-icons/hi2";

const WorkCard: FC<WorkI> = ({
  id,
  title,
  description,
  image,
  teamProject,
}) => {
  const [isLargerThan560] = useMediaQuery("(min-width: 560px)");

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
      <Link href={`/works/${id}`}>
        <Card maxW="sm" height="350" bg="accentColor.100">
          <CardBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            width={isLargerThan560 ? "231px" : "300px"}
            overflow="hidden"
          >
            <Image
              quality={90}
              src={image}
              alt="Work preview"
              width="250"
              placeholder="blur"
              style={{
                borderRadius: "10px",
                height: "120px",
                objectFit: "cover",
              }}
            />
            <Stack mt="6" spacing="3">
              <Flex alignSelf="center" alignItems="center">
                <Heading as="h4" size="md" textAlign="center">
                  {title}
                </Heading>
                <Box ml="5px">
                  {teamProject ? (
                    <HiUserGroup size={18} />
                  ) : (
                    <HiUser size={18} />
                  )}
                </Box>
              </Flex>
              <p
                style={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  wordWrap: "break-word",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {description}
              </p>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
