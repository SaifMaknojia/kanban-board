import React, { useState } from "react";
import LaneList from "./task-lane/LaneList";
import { laneData } from "../data";

const Main = () => {
  const [lanes, setLanes] = useState(laneData);

  return (
    <>
      <LaneList setLanes={setLanes} lanes={lanes} />
    </>
  );
};

export default Main;
