import React, { useState, useEffect, useReducer } from 'react'
import Image from "next/image";
import { Inter, Vollkorn } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import Header from "@/components/Header";
import TodayList from "@/components/TodayList";
import LoggedIn from "@/components/LoggedIn";
import { supabaseAuth, supabasePublic } from './../lib/supabaseClient';
import LoggedOut from '@/components/LoggedOut';
import fetchData from '@/lib/fetchData';
import { createQuests, retrieveQuests, updateQuests, deleteQuests } from '@/lib/questsCRUD'
import getRandomQuests from '@/lib/randomQuests';

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "800" });



export default function Home() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState();
  const [allQuests, setAllQuests] = useState();
  const [liveQuests, setLiveQuests] = useState();

  useEffect(() => {
    let myFunc = async () => {
      if (status === "authenticated" && !userData) {
        console.log("here");
        let userData, allQuests, liveQuests;
    
        try {
          userData = await fetchData(session);
          userData = userData[0];
          console.log(userData);
          setUserData(userData);
        } catch (error) {
          console.log(error);
        }
    
        try {
          allQuests = await retrieveQuests(userData.id);
          console.log(allQuests);
          setAllQuests(allQuests);
        } catch (error) {
          console.log(error);
        }
    
        if (
          (new Date().toISOString().split("T")[0] - userData.last_updated) /
            (1000 * 60 * 60) >
          24
        ) {
          try {
            liveQuests = await getRandomQuests(3, allQuests);
            console.log(liveQuests);
            setLiveQuests(liveQuests);
          } catch (error) {
            console.log(error);
          }
    
          for (let quest of allQuests) {
            try {
              const { data, error } = await supabasePublic
                .from("quests")
                .update({ live: "FALSE" })
                .eq("quest_id", quest["quest_id"]);
              if (error) {
                console.log(error);
              }
            } catch (error) {
              console.log(error);
            }
          }
    
          for (let quest of liveQuests) {
            try {
              const { data, error } = await supabasePublic
                .from("quests")
                .update({ live: "TRUE" })
                .eq("quest_id", quest["quest_id"]);
              if (error) {
                console.log(error);
              }
            } catch (error) {
              console.log(error);
            }
          }
    
          try {
            const { data, error } = await supabaseAuth
              .from("users")
              .update({ last_updated: new Date().toISOString().split("T")[0] })
              .eq("id", userData.id);
            if (error) {
              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          liveQuests = [];
          for (let quest of allQuests) {
            if (quest.live) {
              liveQuests.push(quest);
            }
          }
          setLiveQuests(liveQuests);
        }
      }
    };
    
      myFunc()

    }, [session, status])




  return (
    <div>
      <div className="flex flex-col justify-between no-scrollbar">
        <Header name={userData?.name} image={userData?.image}/>
        <main
          className={`flex max-h-screen flex-col items-center justify-between ${vollkorn.className} no-scrollbar`}
        >
          {userData ?
            <LoggedIn
              liveQuests={liveQuests}
              allQuests={allQuests}
              id={userData.id}
              retrieveQuests={retrieveQuests}
            />
            : <LoggedOut />}
          {/* <InputBox/> */}
        </main>
      </div>
    </div>
  );
}
