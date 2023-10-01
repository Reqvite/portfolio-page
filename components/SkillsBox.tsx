import { FC } from "react";
import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { CheckIcon, SettingsIcon } from "@chakra-ui/icons";

const SkillsBox: FC = () => (
  <Box>
    <Heading as="h3" fontSize={25}>
      Frontend skills
    </Heading>
    <Flex padding={5}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          HTML5
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          CSS/SASS
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Styled components
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          JavaScript / Typescript
        </ListItem>
      </List>
      <Spacer />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          React
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Redux
        </ListItem>
        <ListItem>
          <Tooltip label="In progress" aria-label="Typescript knowledge">
            <ListIcon as={SettingsIcon} color="yellow.500" />
          </Tooltip>
          React native
        </ListItem>
        <ListItem>
          <Tooltip label="In progress" aria-label="Next.js knowledge">
            <ListIcon as={SettingsIcon} color="yellow.500" />
          </Tooltip>
          Next.js
        </ListItem>
      </List>
    </Flex>
    <Heading as="h3" fontSize={25}>
      Backend skills
    </Heading>
    <Flex padding={5}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Node.js
        </ListItem>
      </List>
      <Spacer />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          MongoDb
        </ListItem>
      </List>
    </Flex>
    <Heading as="h3" fontSize={25}>
      Tools
    </Heading>
    <Flex padding={5}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Webpack
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Git
        </ListItem>
      </List>
      <Spacer />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Storybook
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Swagger
        </ListItem>
      </List>
    </Flex>
  </Box>
);

export default SkillsBox;
