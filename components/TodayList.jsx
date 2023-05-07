import React, { useState, useEffect } from "react";
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

const getQuests = (setQuests) => {
  
  let allQuests = [
    { key: 1, value: "task one" },
    { key: 2, value: "task two" },
    { key: 3, value: "task three" },
    { key: 4, value: "task four" },
    { key: 5, value: "task five" },
  ]

  let quests = []
  
  let i = 0
  while (i < 3) {
    let selQ = allQuests[Math.floor(Math.random() * allQuests.length)]
    for (let item in allQuests){
      if (item = selQ["key"]){
        selQ = allQuests[Math.floor(Math.random() * allQuests.length)]
      }
    }
    quests.push(selQ)
    i++
  }

  setQuests(quests)
};


function TodayList() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    getQuests(setQuests)
  }, [])



  return (
    <div>
      <List spacing={5}>
        {quests.map((q) => (
          <ListItem>
            <QuestCard id={q["key"]} questTitle={q["value"]} questType="type" />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodayList;
