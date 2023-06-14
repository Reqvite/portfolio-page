import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Text,
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
import styled from "@emotion/styled";

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
            width="100%"
            maxW={isLargerThan560 ? "231px" : "300px"}
            overflow="hidden"
          >
            <StyledImage
              quality={90}
              src={image}
              alt="Work preview"
              width="250"
              placeholder="blur"
              
            />
            <Stack mt="6" spacing="3">
              <Flex alignSelf="center" alignItems="center">
                <Heading as="h3" fontSize="19px" textAlign="center">
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
              <StyledText>{description}</StyledText>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

export default WorkCard;

const StyledImage = styled(Image)`
  border-radius: 10px;
  min-height: 130px;
  object-fit: cover;
`;

const StyledText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
