import './App.css';
import {useSelector} from 'react-redux'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// El useDispatch es para hacer algo, el use Selector para seleccionar algo
// Desde el estado


function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)
  return (
    <div className="App">
      <h1> Practica Redux </h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
