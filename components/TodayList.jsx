import React, {useState} from "react";
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

const getQuests = () => {
  
}

function TodayList() {

  const quests = [{}]

  
  return (
    <div>
      <List spacing={5}>
        <ListItem>
          <QuestCard id="1" questTitle="title" questType="type" />
        </ListItem>
        <ListItem>
          <QuestCard id="2" questTitle="title" questType="type" />
        </ListItem>
        <ListItem>
          <QuestCard id="3" questTitle="title" questType="type" />
        </ListItem>
        <ListItem>
          <QuestCard id="3" questTitle="title" questType="type" />
        </ListItem>        <ListItem>
          <QuestCard id="3" questTitle="title" questType="type" />
        </ListItem>        
      </List>
    </div>
  );
}

export default TodayList;
