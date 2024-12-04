'use client'

import { useState } from 'react'
import Nav from "./Components/Nav";
import HomeContent from "./Components/HomeContent";
import SavedLists from "./Components/SavedLists";
import { MyContext } from "./Context/TaskSaveContext.js";

export default function Home() {

  const [userSavedTask, setUserSavedTask] = useState();
  const [alertDeleteTask,setAlertDeleteTask] = useState();
  const [editBoxStatus,setEditBoxStatus] = useState('hide');


  return (
    <div className="h-screen mt-3">
      <Nav />

      <MyContext.Provider value={{ userSavedTask, setUserSavedTask,alertDeleteTask,setAlertDeleteTask , editBoxStatus,setEditBoxStatus}}>
        <HomeContent />
        <SavedLists />
      </MyContext.Provider>

    </div>
  );
}
