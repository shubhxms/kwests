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
    <div className="shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <Card
        className="p-3 pb-3 rounded-full w-3/5 mx-auto"
        variant={"flushed"}
        size="sm"
      >
        <Grid>
          {/* <ButtonGroup
          orientation="vertical"
          size="sm"
          className="flex justify-evenly"
          columnSpan={0.5}
        > */}
          {/* <Button colorScheme="whatsapp" leftIcon={<CheckIcon />}>
            done
          </Button> */}
          {/* <Button colorScheme="facebook" leftIcon={<RepeatIcon />}>
            roll
          </Button> */}
          {/* <Button colorScheme="linkedin" leftIcon={<EditIcon />} isDisabled>
            save
          </Button> */}
          {/* <Button colorScheme="messenger" leftIcon={<ArrowRightIcon />}>
            share
          </Button> */}
          {/* <Button colorScheme="red" leftIcon={<DeleteIcon />}>
            delete
          </Button> */}
          {/* </ButtonGroup> */}

          <GridItem>
            <CardHeader className="pt-0">
              {/* <Heading size="md" className="p-0"> */}
              {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}

              <HStack spacing={2}>
                {/* <Heading size="md" className="text-center">{questTitle}</Heading> */}
                <div className="mx-auto">
                  <p>{questTitle}</p>
                </div>
                {/* <Tag
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
              </Tag> */}
              </HStack>
              {/* </Heading> */}
            </CardHeader>
            {/* 
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
          </CardBody> */}
          </GridItem>
        </Grid>
      </Card>
    </div>
  );
}

export default QuestCard;
