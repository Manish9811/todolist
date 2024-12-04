import { useContext,useState,useEffect } from "react"
import { MyContext } from "../Context/TaskSaveContext"
import InputField from "./InputField"

const EditTask = () => {
    const {editBoxStatus,setEditBoxStatus} = useContext(MyContext);
    const [currentSavedData,setCurrentSavedData] = useState({list: '', desc : ''});

    const [updateListValue,setUpdateListValue] = useState('');
    const [updateDescValue,setUpdateDescValue] = useState('');

    const updateTask = ()  => {

        const savedTasks = JSON.parse(localStorage.getItem('userList'));

        savedTasks[editBoxStatus].list = updateListValue
        savedTasks[editBoxStatus].description = updateDescValue
        
        console.log(savedTasks)

        localStorage.clear();

        localStorage.setItem('userList', JSON.stringify(savedTasks))

        setEditBoxStatus("hide");

       
    }

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('userList'));

        savedTasks.map((value)=>{
            if(value.index==editBoxStatus){
                setUpdateListValue(value.list);
                setUpdateDescValue(value.description)
            }
        })
    },[])
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 h-60 w-80 flex-col items-center justify-center p-2">

            <h1 className="text-center"> Update list <span className="font-bold">"{updateListValue}"</span></h1>
                <InputField placeholder={"Enter update list"} inputValue={updateListValue} changeEvent={setUpdateListValue} type={'text'}/>
                <InputField placeholder={"Enter update description"} inputValue={updateDescValue} changeEvent={setUpdateDescValue} type={'text'}/>

                <div className="flex justify-center items-center mt-2 p-6">
                    <button className="m-4 py-2 px-3.5 bg-green-400" onClick={updateTask}>Update</button>
                    <button className="m-4 py-2 px-3.5" onClick={() => setEditBoxStatus('hide')}>Cancel</button>
                </div>
        </div>
    )
}

export default EditTask
