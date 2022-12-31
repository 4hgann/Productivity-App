import LiveBackground from "./Components/LiveBackground"
import Toolbar from "./Components/Toolbar"
import FeatureWindow from "./Components/FeatureWindow"
import TodoList from "./Components/Todos/TodoList"
import ClockHome from "./Components/Clock/ClockHome"
import "antd/dist/antd.css"
import WeatherWidget from "./Components/Weather/WeatherWidget"

function App() {
  return (
    <div className="home">
      <LiveBackground />
      <div className="content">
        <Toolbar />
        <FeatureWindow name="todo">
          <TodoList />
        </FeatureWindow>
        <FeatureWindow name="clock">
          <ClockHome />
        </FeatureWindow>

        <WeatherWidget name="weather" />
      </div>
    </div>
  )
}

export default App
