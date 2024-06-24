import {Component, useEffect , useState, setState} from 'react';
import './App.css';
import List from "./components/list"

function App() {
  const [checkBoxValues, setcheckBoxValues] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
  const [taskNames, setTaskName] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);

  useEffect(() =>
  {
    console.log("checkBox or taskName altered");
  },
  [checkBoxValues, taskNames]);
  const handleChange = (index, newValue) =>
  {
    const newCheckBoxValues = [...checkBoxValues];
    newCheckBoxValues[index] = newValue;
    setcheckBoxValues(newCheckBoxValues);
  }
  const handleTaskChange = (index, newValue) =>
  {
    console.log(index);
    const newTaskValues = [...taskNames];
    newTaskValues[index] = newValue;
    setTaskName(newTaskValues);
  }
  return (
    <div className="App">
      <List checkBoxValues = {checkBoxValues} taskNames = {taskNames} handleChange = {handleChange} handleTaskChange = {handleTaskChange}/>
      <button id  = "pomodoroStart">Start Pomodoro</button>
    </div>
  );
}

export default App;
