import LiveBackground from './Components/LiveBackground';
import Toolbar from './Components/Toolbar';
import FeatureWindow from './Components/FeatureWindow';

function App() {

  return (
    <div className = "home">
      <LiveBackground/>
      <div className="content">
        <Toolbar/>
        <FeatureWindow child={<p>Hello World</p>} name='todo'/>
      </div>
    </div>

  );
}

export default App;
