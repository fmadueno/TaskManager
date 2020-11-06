import './index.css';
import LikeButton from './components/LikeButton'
import TaskList from './components/TaskList'

const tasks = [
  "Lavar los platos",
  "Hacer la compra",
  "Cocinar huevos fritos"
]

function App() {
  
  const handleClick = () => {
    console.log('Clicked');
  }

  const handleChange = (event) => {
    console.log(event.target.value);
  }
  
  return (
    <div>
      <h1>Titulo</h1>
      <LikeButton numberLikes={2}/>     
      <TaskList tasks={tasks}/> 
      <button className="big-boton" onClick={handleClick}>Click me</button>
      <input onChange={handleChange} />
    </div>
  );
}

export default App;
