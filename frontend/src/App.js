import LiveBackground from './Components/LiveBackground';
import Toolbar from './Components/Toolbar';

import UIStore from './Stores/UIStore';
import FeatureWindow from './Components/FeatureWindow';

function App() {
  const interfaceStore = new UIStore()

  return (
    <div className = "home">
      <LiveBackground/>
      <div className="content">
        <Toolbar store={ interfaceStore }/>
        <FeatureWindow child={<p>Hello World</p>} name='todo' store={ interfaceStore }/>
      </div>

    </div>

  );
}

export default App;
