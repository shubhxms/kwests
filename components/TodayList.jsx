import React, { useState, useEffect, useReducer } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  CheckboxGroup,
  Checkbox,
  Heading
} from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "@chakra-ui/icons";
import QuestCard from "./QuestCard";


function TodayList(props) {


  return (
    <div className="flex flex-col justify-center place-content-center	w-3/5 mx-auto">
      <Heading className="text-center">todays kwests</Heading>
      <List spacing={5}>
        {props.liveQuests &&
          props.liveQuests.map((q) => (
            <ListItem  key={q["key"]}>
              <QuestCard
                id={q["key"]}
                questTitle={q["quest_name"]}
                questType="type"
              />
            </ListItem>
          ))}
      </List>
      {props.liveQuests == [] && 
        <div>
          Enter quests to work on when bored!
          <br/>
          Get 3 random quests daily!
        </div>
      }
    </div>
  );
}

export default TodayList;
