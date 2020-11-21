import React from "react";
import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { useTasks } from "./hooks/useTasks";


function App() {
    const {search, tasks, pagination} = useTasks(); //hook

  return (
  <div>
      <Header tasks={tasks} search={search}/>
      <TaskList tasks={tasks}/>
      <Footer tasks={tasks} pagination={pagination} />
  </div>
  );
}

export default App;