import React, {useState} from 'react'
import Button from '@mui/material/Button';

function App (){

  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function addTask() {
    if (input.trim() !== "") {
      setTask((prevTask) => [...prevTask, input]);
      setInput("");
    }
  }

  return(
    <div className='h-screen bg-slate-800 text-white'>
      <div className='flex flex-col items-center justify-center p-10 gap-5'>
        <h1 className='text-3xl font-bold'>To - Do List</h1>
        <div className='flex flex-row'>
          <input 
            className='px-3 text-black mx-4 rounded-lg w-[20vw]'
            placeholder='add new task...'
            value={input}
            onChange={handleChange}
          />
          <Button onClick={addTask} variant="contained" color="success" >
            Add
          </Button>
        </div>
        <ul>
          {task.map((todoItem, index) => (
            <li
              key={index} 
              className='bg-slate-400 text-black w-[40vw] h-14 flex flex-row items-center justify-center text-center rounded-lg shadow-lg text-xl font-bold mb-5'
            >
              {todoItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App