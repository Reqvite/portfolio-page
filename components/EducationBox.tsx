import { FC } from "react";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const EducationBox: FC = () => (
  <Box>
    <Heading as="h3" fontSize={25} mb={5}>
      Education
    </Heading>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    >
      <Flex padding={5} justifyContent={"center"} alignItems={"center"}>
        <List spacing={3} textAlign={"center"}>
          <ListItem>
            <Heading as="h4" fontSize={18}>
              IT School GoIT
            </Heading>
            <Text>Fullstack Developer 2022 - 2023</Text>
          </ListItem>
          <ListItem>
            <Heading as="h4" fontSize={18}>
              IT School Eliftech
            </Heading>
            <Text>June - August 2023</Text>
          </ListItem>
          <ListItem>
            <Heading as="h4" fontSize={18}>
              Master of Automation and computer-integrated technologies
            </Heading>
            <Text>
              Ukrainian State Univercity of Chemical technology 2016 - 2022
            </Text>
          </ListItem>
        </List>
      </Flex>
    </Box>
  </Box>
);

export default EducationBox;
