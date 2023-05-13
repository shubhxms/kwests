import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { SearchIcon, CalendarIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import TodayList from "./TodayList";
import InputBox from "./InputBox";
import UserPage from "./UserPage";

function LoggedIn(props) {
  return (
    <div className="w-2/5 no-scrollbar">
      <Tabs isFitted variant="enclosed" isLazy defaultIndex={1}>
        <TabList>
          <Tab>
            <SearchIcon />
          </Tab>
          <Tab>
            <CalendarIcon />
          </Tab>
          <Tab>
            <ArrowUpDownIcon />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <TodayList />
          </TabPanel>
          <TabPanel>
              <UserPage/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default LoggedIn;
