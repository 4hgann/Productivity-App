import { Tabs } from "antd";
import Timer from "./Timer";
import { IoMdClock } from "react-icons/io";

const ClockHome = () => {

    const { TabPane } = Tabs
    return(
        <Tabs defaultActiveKey="1" centered>
            <TabPane key ="1" tab="Clock" >
            </TabPane>
            <TabPane key ="2" tab="Timer" >
                <Timer/>
            </TabPane>
            <TabPane key ="3" tab="Countdown" >
            </TabPane>
        </Tabs>
    )
}

export default ClockHome;