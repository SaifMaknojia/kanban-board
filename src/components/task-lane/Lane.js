import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Lane = ({ lane }) => {
  return (
    <>
      <div className="lane ">
        <h6 className="lane-title d-flex justify-content-center fw-bold">
          {lane.lanename}
        </h6>
        <Droppable droppableId={lane.id.toString()} key={lane.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="lane-body"
            >
              {lane.tasks.map((task, index) => (
                <Task index={index} key={task.id} task={task} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default Lane;
