import React from "react";
import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {

  return (
  <div>
      <Header />
      <TaskList />
      <Footer />
  </div>
  );
}

export default App;