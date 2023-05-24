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
  Tooltip,
  Heading,
} from "@chakra-ui/react";

import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  CloseIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

import { createQuests, updateQuests, deleteQuests } from "@/lib/questsCRUD";
import EditableQuest from "./EditableQuest";

const handleFormEnter = async (
  newText,
  setNewText,
  id,
  createQuestsCallback
) => {
  console.log(newText);
  newText = newText.trim()
  console.log(newText);
  if(!newText) setNewText(""); return;
  let newQ = { user_id: id, quest_name: newText };
  try {
    // createQuests(newQ);
    await createQuestsCallback(id, newQ);
  } catch (error) {
    console.log(error);
  }
  // let newAllQ = []
  // for (let item of allQ){
  //      newAllQ.push(item)
  // }
  // newAllQ.push(newText)
  //   setAllQ([...allQ, newQ]);
  setNewText("");
};

const handleEditSubmit = (value, user_id, quest_id) => {
  updateQuests(user_id, quest_id, newQ);
};

function UserPage(props) {
  const [newText, setNewText] = useState("");

  return (
    <div>
      <List spacing={3}>
        <Heading className="text-center">all kwests</Heading>

        {props.allQuests?.map((q) => (!q.live && 
          <div key={q["quest_id"]} className="mx-auto">
            <EditableQuest
              questId={q["quest_id"]}
              questName={q["quest_name"]}
              userId={props.id}
              live={q["live"]}
              deleteQuestsCallBack={props.deleteQuestsCallBack}
              updateQuestsCallback={props.updateQuestsCallback}
            />
          </div>
        ))}
      </List>

      <div className="fixed bottom-10 w-2/5 opacity-100 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormEnter(
              newText,
              setNewText,
              props.id,
              props.createQuestsCallback
            );
          }}
        >
          <FormControl isRequired>
            <InputGroup>
              <Input
                placeholder="New Quest"
                variant="filled"
                onChange={(e) => setNewText(e?.target?.value)}
                value={newText}
                className=" opacity-100"
              />
              <InputRightElement
                onClick={() =>
                  handleFormEnter(
                    newText,
                    setNewText,
                    props.id,
                    props.createQuestsCallback
                  )
                }
              >
                <ArrowForwardIcon />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
