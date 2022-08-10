import { Tabs } from "antd";
import { IoMdClock } from "react-icons/io";

const ClockHome = () => {

    const { TabPane } = Tabs
    return(
        <Tabs defaultActiveKey="1" centered>
            <TabPane key ="1" tab="Clock" >
            </TabPane>
        </Tabs>
    )
}

export default ClockHome;