import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting at school',
        day: 'Nov 27th at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors appointment',
        day: 'Nov 28th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery shopping',
        day: 'Nov 29th at 3:30pm',
        reminder: false,
    }
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Remminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {/* 'onDelete' is a Prop of 'Tasks' */} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={ toggleReminder }/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
