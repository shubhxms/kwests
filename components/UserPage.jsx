import React, { useState } from "react";
import {
  List,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  Heading,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import EditableQuest from "./EditableQuest";

const handleFormEnter = async (
  newText,
  setNewText,
  id,
  createQuestsCallback
) => {
  console.log(newText);
  newText = newText.trim();
  console.log(newText);
  if (!newText) {
    setNewText("");
    return;
  }
  let newQ = { user_id: id, quest_name: newText };
  try {
    await createQuestsCallback(id, newQ);
  } catch (error) {
    console.log(error);
  }

  setNewText("");
};

function UserPage(props) {
  const [newText, setNewText] = useState("");

  return (
    <div>
      <List spacing={3}>
        <Heading className="text-center">all kwests</Heading>

        {props.allQuests?.map(
          (q) =>
            !q.live && (
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
            )
        )}
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
