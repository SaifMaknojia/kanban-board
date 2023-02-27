import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { LabelData } from "../../data";
import { FaCircle } from "react-icons/fa";

const Task = ({ index, task }) => {
  return (
    <>
      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
        {(provided) => {
          const label = LabelData.find((l) => l?.id === task?.labelid);
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="taskcard"
            >
              <div className="title d-flex align-items-center">
                <FaCircle className="me-1" size="12" color={label.bgcolor} />

                {task.taskname}
              </div>
              <div
                style={{ background: label.bgcolor, color: label.color }}
                className="pill ml-3"
              >
                {label.name}
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
};

export default React.memo(Task);
