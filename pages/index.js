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

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "800" });



export default function Home() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if(session){
      fetchData(session).then(data => {
        setUserData(data)
      })
    }
  }, [session])
  



  return (
    <div>
      <div className="flex flex-col justify-between no-scrollbar">
        <Header />
        <main
          className={`flex max-h-screen flex-col items-center justify-between ${vollkorn.className} no-scrollbar`}
        >
          {session ? <LoggedIn userData={userData}/> : <LoggedOut />}
          {/* <InputBox/> */}
        </main>
      </div>
    </div>
  );
}

