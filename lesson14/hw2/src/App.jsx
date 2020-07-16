import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
  return (
    <div>
      <Clock location={"New York"} offset={-5} />
      <Clock location={"Kyiv"} offset={3} />
      <Clock location={"London"} offset={0} />
    </div>
  );
};
export default App;
