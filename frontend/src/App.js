import LiveBackground from './Components/LiveBackground';
import Toolbar from './Components/Toolbar';
import FeatureWindow from './Components/FeatureWindow';
import TodoList from './Components/Todos/TodoList'
import "antd/dist/antd.css";

function App() {

  return (
    <div className = "home">
      <LiveBackground/>
      <div className="content">
        <Toolbar/>
        <FeatureWindow name='todo'> 
          <TodoList/> 
        </FeatureWindow>
      </div>
    </div>

  );
}

export default App;
