import React, { useState, useEffect, useReducer } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "@chakra-ui/icons";
import QuestCard from "./QuestCard";


function TodayList(props) {


  return (
    <div>
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
    </div>
  );
}

export default TodayList;
