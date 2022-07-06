import LiveBackground from './Components/LiveBackground';
import Toolbar from './Components/Toolbar';

import { useContext } from 'react';
import UIStore from './Stores/UIStore';

function App() {
  const UI = useContext(UIStore);

  return (
    <div className = "home">
      <LiveBackground/>
      <div className="content">
        <Toolbar store={ new UIStore() }/>
      </div>

    </div>

  );
}

export default App;
