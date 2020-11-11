import './App.css';
import Header from './components/Header'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';



const tasks = [
  { 
    taskId: '1',
    taskName: 'Lavar los platos',
    done: true,
    who: 'Jose',
    requestedOn: '2020-01-20',
    doneOn: '2020-01-18'
   },
   { 
     taskId: '2',
     taskName: 'Hacer la compra',
     done: false,
     who: 'Manuel'
   },
   {  
     taskId:'3',
     taskName: 'Revisar la clase de Victor',
     done: true,
     who: 'Ana'
   },
   {
     taskId:'4',
     taskName: 'Comprar mascarillas',
     done: false,
     who: 'Maria'
   },
];


function App() {
  return (
  <div>
    <h1>Todo List</h1>
    <div>
      <Header tasks={tasks} />
      <TaskList tasks={tasks}/>
      <Footer tasks={tasks}/>
    </div>
  </div>
  );
}

export default App;