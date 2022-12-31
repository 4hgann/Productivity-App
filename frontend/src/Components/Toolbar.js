import { IoIosList, IoMdTime, IoMdCloudOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { UIContext } from "../Contexts/UIContext";
import { useContext } from "react";

import "../Styles/Toolbar.css";

const Toolbar = () => {
  const { toggle } = useContext(UIContext);
  return (
    <div className="toolbar">
      <IconContext.Provider value={{ size: "20px" }}>
        <button
          className="first-item toolbar-item"
          onClick={() => toggle("todo")}
        >
          <IoIosList className="icon" color="black" />
        </button>
        <button className="toolbar-item" onClick={() => toggle("clock")}>
          <IoMdTime className="icon" color="black" />
        </button>
        <button
          className="last-item toolbar-item"
          onClick={() => toggle("weather")}
        >
          <IoMdCloudOutline className="icon" color="black" />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default Toolbar;
