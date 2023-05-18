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
  useToast
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

const handleSubmit = (id, questId, newQuestName) => {
  console.log(newQuestName);
  let res = updateQuests(id, questId, { quest_name: newQuestName });
  console.log(res);
};

const handleDelete = async (id, questId, live, allQuests, toast, retrieveQuests) => {

    if (live){
    // let liveQuests
    //     try {
    //         liveQuests = await getRandomQuests(3, allQuests);
    //         console.log(liveQuests);
    //       } catch (error) {
    //         console.log(error);
    //       }
    
    //       for (let quest of allQuests) {
    //         try {
    //           const { data, error } = await supabasePublic
    //             .from("quests")
    //             .update({ live: "FALSE" })
    //             .eq("quest_id", quest["quest_id"]);
    //           if (error) {
    //             console.log(error);
    //           }
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }
    
    //       for (let quest of liveQuests) {
    //         try {
    //           const { data, error } = await supabasePublic
    //             .from("quests")
    //             .update({ live: "TRUE" })
    //             .eq("quest_id", quest["quest_id"]);
    //           if (error) {
    //             console.log(error);
    //           }
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }
    
    //       try {
    //         const { data, error } = await supabaseAuth
    //           .from("users")
    //           .update({ last_updated: new Date().toISOString().split("T")[0] })
    //           .eq("id", userData.id);
    //         if (error) {
    //           console.log(error);
    //         }
    //       } catch (error) {
    //         console.log(error);
    //       }
    // toast({
    //     title: 'Cannot delete live quest!',
    //     description: "wait for next roll! :).",
    //     status: 'failure',
    //     duration: 9000,
    //     isClosable: true,
    //   })

    }else{
        deleteQuests(id, questId)
        // retrieveQuests()
    }
}


function EditableQuest(props) {
    const toast = useToast()
  return (
    <div>
      <ListItem key={props.questId}>
        <Editable
          defaultValue={props.questName}
          onSubmit={(value) => handleSubmit(props.userId, props.questId, value)}
        >
          <ListIcon
            as={ArrowForwardIcon}
            color="green.500"
            style={{ display: "inline-block" }}
          />
          <EditablePreview />
          <EditableTextarea />
          <IconButton icon={<DeleteIcon />} variant='ghost' onDoubleClick={() => handleDelete(props.userId, props.questId, props.live, props.allQuests, toast, props.retrieveQuests)}/>
          
        </Editable>
      </ListItem>
    </div>
  );
}

export default EditableQuest;
