import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

const app = document.getElementById("app");

// create a root
const root = createRoot(app);

//render app to root
root.render(<App />);
