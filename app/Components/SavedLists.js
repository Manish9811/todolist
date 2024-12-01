"use client"

import { useContext, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { MyContext } from '../Context/TaskSaveContext';



const SavedLists = () => {
    const {userSavedTask,setUserSavedTask,alertDeleteTask,setAlertDeleteTask} = useContext(MyContext);

    useEffect(()=> {
        const savedData = JSON.parse(localStorage.getItem('userList'));
        setUserSavedTask(savedData)
    },[])

    const deleteTask = (taskId) => {
        console.log(taskId)

        const userData = JSON.parse(localStorage.getItem('userList'));

        console.log(userData)

        userData.map((value,index) => {
            if(taskId == value.index){
                console.log("match")
                setAlertDeleteTask(!alertDeleteTask);
                userData.splice(index,1)
                localStorage.clear();

                localStorage.setItem('userList', JSON.stringify(userData));

            }
        })
    }

  

    return (
        <div className='h-96 w-100 flex items-start justify-center mt-9 overflow-y-scroll'>
            <table className='border border-black-500 w-3/4'>
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-2">Lists</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>

                {
                    userSavedTask && userSavedTask.length > 0 && userSavedTask.map((value,index) => {
                        return (
                            <tbody key={index}>
                    <tr className="border-b hover:bg-gray-100 text-center">
                        <td className="px-4 py-2">{value.list}</td>
                        <td className="px-4 py-2">{value.description}</td>
                        <td className='flex justify-center items-center'><button onClick={()=>deleteTask(value.index)} className='p-2 text-white rounded-md m-2 cursor-pointer'>delete</button></td>

                    </tr>
                    
                  
                </tbody>
                        )
                    })
                }
                
            </table>
        </div>
    )
}

export default SavedLists
