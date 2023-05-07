import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  StackDivider,
  Stack,
  Box,
  ListItem,
  ListIcon,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  IconButton,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  DeleteIcon,
  RepeatIcon,
  CheckIcon,
  EditIcon,
} from "@chakra-ui/icons";

function QuestCard(props) {
  let { questTitle, questType } = props;

  return (
    <Card className="p-3 pb-3" variant={"filled"} size="sm">
      <Grid templateColumns="repeat(10, 1fr)" gap={3}>
        <ButtonGroup
          orientation="vertical"
          size="sm"
          className="flex justify-evenly"
        >
          <Button colorScheme="whatsapp" leftIcon={<CheckIcon />}>
            done
          </Button>
          {/* <Button colorScheme="facebook" leftIcon={<RepeatIcon />}>
            roll
          </Button> */}
          {/* <Button colorScheme="linkedin" leftIcon={<EditIcon />} isDisabled>
            save
          </Button> */}
          <Button colorScheme="messenger" leftIcon={<ArrowRightIcon />}>
            share
          </Button>
          {/* <Button colorScheme="red" leftIcon={<DeleteIcon />}>
            delete
          </Button> */}
        </ButtonGroup>

        <GridItem colSpan={9}>
          <CardHeader className="pt-0">
            {/* <Heading size="md" className="p-0"> */}
            {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}

            <HStack spacing={2}>
              <h3>{questTitle}</h3>
              <Tag
                size={"sm"}
                key={"md"}
                borderRadius="full"
                variant="solid"
                colorScheme="blue"
              >
                <TagLabel>{questType}</TagLabel>
                <TagCloseButton onClick={() => console.log("here")} />
              </Tag>
              <Tag
                size={"sm"}
                key={"md"}
                borderRadius="full"
                variant="solid"
                colorScheme="pink"
              >
                <TagLabel>{questType}</TagLabel>
                <TagCloseButton />
              </Tag>
            </HStack>
            {/* </Heading> */}
          </CardHeader>

          <CardBody className="pt-0">
            <Stack divider={<StackDivider />} spacing="2">
              <Box>
                <Text pb="2" fontSize="sm">
                  <Editable defaultValue="View a summary of all your clients over the last month.">
                    <EditablePreview />
                    <EditableTextarea />
                  </Editable>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </GridItem>
      </Grid>
    </Card>
  );
}

export default QuestCard;
