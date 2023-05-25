import React from "react";
import TodayList from "./TodayList";
import UserPage from "./UserPage";

function LoggedIn(props) {
  return (
    <div className="w-2/5 no-scrollbar">
      <TodayList liveQuests={props.liveQuests} />
      <br />
      <hr />
      <UserPage
        allQuests={props.allQuests}
        id={props.id}
        deleteQuestsCallBack={props.deleteQuestsCallBack}
        updateQuestsCallback={props.updateQuestsCallback}
        createQuestsCallback={props.createQuestsCallback}
      />
    </div>
  );
}

export default LoggedIn;
