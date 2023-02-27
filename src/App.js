import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <main className="wrapper">
        <Header />
        <Main />
      </main>
    </>
  );
}

export default App;
