// "use client"

import InputField from './InputField';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Context/TaskSaveContext.js';

const HomeContent = () => {

    const userList = []

    const [list, setList] = React.useState('');
    const [description, setDescription] = React.useState('');

    const { userSavedTask, setUserSavedTask,alertDeleteTask } = useContext(MyContext);


    const saveList = (e) => {
        e.preventDefault();

        const existingData = JSON.parse(localStorage.getItem("userList")) || [];



        if (list && description) {

            userSavedTask && userSavedTask.length > 0 ? userSavedTask.map((value) => {

                if (value.list != list && value.description != description) {
                    localStorage.setItem('userList', JSON.stringify([...existingData, { index: userSavedTask ? userSavedTask.length : 0, list, description }]))
                }
                if (value.list == list) {
                    const userApproved = confirm("list already saved. Would you want to save again ?");

                    if (userApproved) {
                        localStorage.setItem('userList', JSON.stringify([...existingData, { index: userSavedTask ? userSavedTask.length : 0, list, description }]))
                    }
                }
                else {
                    return

                }

            }) : localStorage.setItem('userList', JSON.stringify([...existingData, { index: userSavedTask ? userSavedTask.length : 0, list, description }]))




        }
        else {
            alert("list and description required")
        }
        const savedData = JSON.parse(localStorage.getItem('userList'));
        setUserSavedTask(savedData)

        setList('');
        setDescription('')
    }

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('userList'));
        setUserSavedTask(savedData)
    }, [alertDeleteTask])

 


    return (
        <div className='h-auto bg-green mt-5'>
            <form className="flex flex-col items-center mt-3">
                <InputField type={'text'} placeholder={'Enter the list'} name={"list"} changeEvent={setList} inputValue={list} />
                <InputField type={'text'} placeholder={'Enter list desc'} name={"desc"} changeEvent={setDescription} inputValue={description} />

                <button className='bg-black mt-3 w-60 p-2 mb-2 rounded-xl text-white' onClick={saveList}> Save List </button>

            </form>
        </div>
    )
}

export default HomeContent
