import React from "react";
import {
  ListItem,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
    <div className="w-3/5 mx-auto shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
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
          {/* <ListIcon
            as={ArrowForwardIcon}
            color="green.500"
            style={{ display: "inline-block" }}
          /> */}
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
