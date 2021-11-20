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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
