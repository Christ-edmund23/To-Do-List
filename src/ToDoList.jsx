import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]] //swap
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]] //swap
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='max-w-4xl mx-auto pt-10 '>
            <div className="flex flex-col justify-center items-center gap-4 ">
                <h1 className="text-2xl font-bold text-white">To Do List</h1>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn hover:btn-neutral w-full font-bold text-lg" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add New Task <FaPlus /></button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <div className='flex flex-col gap-4'>
                            <h3 className="font-bold text-lg text-center">Add New Task!</h3>
                            <input 
                                type="text" 
                                placeholder="Enter a Task..." 
                                className="input input-bordered w-full " 
                                value={newTask}
                                onChange={handleInputChange}
                            />
                            <button 
                                className='btn btn-success font-bold btn-md textsm'
                                onClick={addTask}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                

                <ol className='w-full'>
                    {tasks.map((tasks,index) => 
                        <li key={index}>
                            <div className='flex flex-row items-center gap-4 w-full h-12 text-center bg-slate-200 rounded-lg my-2 font-semibold'>
                                <span className='w-1/2'>{tasks}</span>
                                <div className='flex flex-row items-center justify-center gap-4 w-1/2'>
                                    <button
                                        onClick={() => deleteTask(index)}
                                    >
                                        <div className='bg-red-500 p-2 rounded-lg flex flex-row items-center gap-2'>
                                            <span className='text-white'>Delete</span> <MdDelete width="30" height="30" />
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => moveTaskUp(index)}
                                    >
                                        <div className='bg-sky-400 p-2 rounded-lg'>
                                            <FaArrowUp width="30" height="30" />
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => moveTaskUp(index)}
                                    >
                                        <div className='bg-sky-400 p-2 rounded-lg'>
                                            <FaArrowDown width="30" height="30" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList