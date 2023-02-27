import { v4 as uuidv4 } from "uuid";

export const laneData = [
  {
    id: 1,
    lanename: "Backlog",
    tasks: [
      {
        id: uuidv4(),
        labelid: 1,
        taskname: "Misspelling on navbar",
        priority: 3,
      },
    ],
  },
  {
    id: 2,
    lanename: "Open",
    tasks: [
      {
        id: uuidv4(),
        labelid: 2,
        taskname: "Add hidden button in Mobile view",
        priority: 1,
      },
      {
        id: uuidv4(),
        labelid: 3,
        taskname: "Design Prototype for Blog Page",
        priority: 2,
      },
      {
        id: uuidv4(),
        labelid: 3,
        taskname: "Update Header",
        priority: 1,
      },
    ],
  },
  {
    id: 3,
    lanename: "In Progress",
    tasks: [
      {
        id: uuidv4(),
        labelid: 3,
        taskname: "Component Redesign",
        priority: 2,
      },
    ],
  },
  {
    id: 4,
    lanename: "Done",
    tasks: [
      {
        id: uuidv4(),
        labelid: 2,
        taskname: "Change Task Form Format",
        priority: 2,
      },
    ],
  },
];

export const LabelData = [
  {
    id: 1,
    key: "B",
    name: "Bug",
    bgcolor: "#E53935",
    color: "#ffffff",
  },
  {
    id: 2,
    key: "S",
    name: "Story",
    bgcolor: "#7CB342",
    color: "#ffffff",
  },
  {
    id: 3,
    key: "T",
    name: "Task",
    bgcolor: "#1E88E5",
    color: "#ffffff",
  },
];
