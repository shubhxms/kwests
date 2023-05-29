import React, { useState, useEffect, useCallback } from 'react'
import { Vollkorn } from "next/font/google";
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import LoggedIn from "@/components/LoggedIn";
import { supabasePublic } from './../lib/supabaseClient';
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

  const getLiveQuests =
    async (userData) => {
      console.log("iyya")
      let liveQuests;

      if (
        ((new Date(new Date().toISOString().split("T")[0]) - new Date(userData.last_updated)) /
        (1000 * 60 * 60) >
        24) || (allQuests.length <= 4)
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
      } else {
        liveQuests = allQuests.filter(q => q.live)
        setLiveQuests(liveQuests)
      }

    }

  useEffect(() => {

    let myFunc = async () => {
      console.log("idharrrr")
      if (status === "authenticated") {
        console.log("here");

        let userData, allQuests, liveQuests;

        // fetch user data
        try {
          userData = await fetchData(session);
          userData = userData[0];
          console.log(userData);
          setUserData(userData);
        } catch (error) {
          console.log(error);
        }

        // fetch all quests
        try {
          allQuests = await retrieveQuests(userData.id);
          console.log(allQuests);
          setAllQuests(allQuests);
        } catch (error) {
          console.log(error);
        }
        // check if live quests are older than 24h, if yes update
        if (
          ((new Date().toISOString().split("T")[0] - userData.last_updated) /
        (1000 * 60 * 60) >
        24) || (allQuests.length <= 4)
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
        } else {
          liveQuests = allQuests.filter(q => q.live)
          setLiveQuests(liveQuests)
        }

      }
    }
    myFunc()

  }, [session, status])




  async function deleteQuestsCallBack(id, questId) {
    await deleteQuests(id, questId)
    setAllQuests(await retrieveQuests(id))
  }

  async function updateQuestsCallback(id, questId, newQuest) {
    await updateQuests(id, questId, newQuest)
    setAllQuests(await retrieveQuests(id))
    await getLiveQuests(userData, liveQuests)
  }

  async function createQuestsCallback(id, quest){
    await createQuests(quest)
    setAllQuests(await retrieveQuests(id))
    await getLiveQuests(userData, liveQuests)
  }


  return (
    <div>
      <div className="flex flex-col justify-between no-scrollbar">
        <Header name={userData?.name} image={userData?.image} />
        <main
          className={`flex max-h-screen flex-col items-center justify-between ${vollkorn.className} no-scrollbar`}
        >
          {userData ?
            <LoggedIn
              liveQuests={liveQuests}
              allQuests={allQuests}
              id={userData.id}
              deleteQuestsCallBack={deleteQuestsCallBack}
              updateQuestsCallback={updateQuestsCallback}
              createQuestsCallback={createQuestsCallback}
            />
            : <LoggedOut />}
          {/* <InputBox/> */}
        </main>
      </div>
    </div>
  );
}
