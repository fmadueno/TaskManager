import './App.css';
import Header from './components/Header'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';



const unfilteredTasks = [
  { 
    taskId: '1',
    taskName: 'Lavar los platos',
    done: true,
    who: 'Jose',
    requestedOn: '2020-01-20',
    doneOn: '2020-01-18',
    imageUrl: '/img/cat1.jpeg'
   },
   { 
     taskId: '2',
     taskName: 'Hacer la compra',
     done: false,
     who: 'Manuel',
     imageUrl: '/img/cat2.jpeg'
   },
   {  
     taskId:'3',
     taskName: 'Revisar la clase de Victor',
     done: false,
     who: 'Ana',
     imageUrl: '/img/cat3.jpeg'
   },
   {
     taskId:'4',
     taskName: 'Comprar mascarillas',
     done: false,
     who: 'Maria',
     imageUrl: '/img/cat4.jpeg'
   },
   {
    taskId:'5',
    taskName: 'Comprar vino',
    done: false,
    who: 'Tipo Pepe',
    imageUrl: '/img/cat5.jpeg'
  },
  {
    taskId:'6',
    taskName: 'Llamar a Joan',
    done: false,
    who: 'Joan',
    imageUrl: '/img/cat6.jpeg'
  },
  {
    taskId:'7',
    taskName: 'Ir al dentista',
    done: false,
    who: 'Doctor J',
    imageUrl: '/img/cat6.jpeg'
  },
];

const getTasks = (tasks, page, pageSize) => {
  return tasks.slice(page * pageSize, (page +1) * pageSize);
};

function App() {
  const page = 0;
  const pageSize = 10; //Ok
  const tasks = getTasks(unfilteredTasks, page, pageSize);
  const amountOfTasks = tasks.length;
  const pages = Math.ceil(amountOfTasks / pageSize);
  
  return (
  <div>
      <Header tasks={tasks} />
      <TaskList tasks={tasks}/>
      <Footer tasks={tasks} page={page} pages={pages}/>
  </div>
  );
}

export default App;