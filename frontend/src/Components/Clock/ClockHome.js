import { Tabs } from "antd";
import Timer from "./Timer";
import { IoMdClock } from "react-icons/io";
import StopWatch from "./StopWatch";

const ClockHome = () => {

    const { TabPane } = Tabs
    return(
        <Tabs defaultActiveKey="1" centered>
            <TabPane key ="1" tab="Clock" >
            </TabPane>
            <TabPane key ="2" tab="Countdown" >
                <Timer/>
            </TabPane>
            <TabPane key ="3" tab="Stopwatch" >
                <StopWatch/>
            </TabPane>
        </Tabs>
    )
}

export default ClockHome;