import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  Flex,
  ButtonGroup,
  IconButton,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  CloseIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { updateQuests, deleteQuests } from "@/lib/questsCRUD";
import { supabasePublic } from "@/lib/supabaseClient";

const handleSubmit = async (
  id,
  questId,
  newQuestName,
  updateQuestsCallback
) => {
  console.log(newQuestName);
  await updateQuestsCallback(id, questId, { quest_name: newQuestName });
};

const handleDelete = async (id, questId, live, deleteQuestsCallBack) => {
  if (live) {
    console.log("cannot delete live quests!");
  } else {
    await deleteQuestsCallBack(id, questId);
  }
};

function EditableQuest(props) {
  return (
    <div className="w-3/5 mx-auto">
      <ListItem key={props.questId}>
        <Editable
          defaultValue={props.questName}
          onSubmit={(value) =>
            handleSubmit(
              props.userId,
              props.questId,
              value,
              props.updateQuestsCallback
            )
          }
        >
          <ListIcon
            as={ArrowForwardIcon}
            color="green.500"
            style={{ display: "inline-block" }}
          />
          <Tooltip
            label="Be careful!"
            bg="red.300"
            color="black"
            placement="top-start"
          >
            <IconButton
              icon={<DeleteIcon />}
              variant="ghost"
              onClick={() =>
                handleDelete(
                  props.userId,
                  props.questId,
                  props.live,
                  props.deleteQuestsCallBack
                )
              }
            />
          </Tooltip>
          <Tooltip
            label="Click to edit!"
            bg="gray.300"
            color="black"
            placement="top-start"
          >
            <EditablePreview />
          </Tooltip>

          <EditableInput />
        </Editable>
      </ListItem>
    </div>
  );
}

export default EditableQuest;
