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

const SkillsBox = () => (
  <Box>
    <Heading as="h3" fontSize={25}>
      Skills
    </Heading>
    <Flex padding={5}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          HTML5
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          CSS
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          SASS
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          JavaScript
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          React
        </ListItem>
      </List>
      <Spacer />
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          React native
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Redux
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Node.js
        </ListItem>
        <ListItem>
          <Tooltip label="In progress" aria-label="Typescript knowledge">
            <ListIcon as={SettingsIcon} color="yellow.500" />
          </Tooltip>
          Typescript
        </ListItem>
        <ListItem>
          <Tooltip label="In progress" aria-label="Next.js knowledge">
            <ListIcon as={SettingsIcon} color="yellow.500" />
          </Tooltip>
          Next.js
        </ListItem>
      </List>
    </Flex>
  </Box>
);

export default SkillsBox;
