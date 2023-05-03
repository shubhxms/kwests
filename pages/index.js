import Image from "next/image";
import { Inter, Vollkorn } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import InputBox from "@/components/InputBox";
import Header from "@/components/Header";
import TodayList from "@/components/TodayList";
import LoggedIn from "@/components/LoggedIn";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";
import { HomeIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "800" });

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      <div className="flex flex-col justify-between no-scrollbar">
        <Header />
        <main
          className={`flex max-h-screen flex-col items-center justify-between ${vollkorn.className} no-scrollbar`}
        >
          <LoggedIn />
          {/* <InputBox/> */}
        </main>
      </div>
    </div>
  );
}
