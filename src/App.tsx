import "./App.css";
import * as React from "react";
import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
