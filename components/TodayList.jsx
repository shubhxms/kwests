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
import { useSession, signIn, signOut } from "next-auth/react";
import { supabaseAuth, supabasePublic } from '../lib/supabaseClient';


function TodayList() {
  const { data: session, status } = useSession();
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {uid: null, quests: null, selectedQuests: null}
  )




  return (
    <div>
      <List spacing={5}>
        {state.quests && state.quests.map((q) => (
          <ListItem>
            <QuestCard id={q["key"]} questTitle={q["quest_name"]} questType="type" />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodayList;
