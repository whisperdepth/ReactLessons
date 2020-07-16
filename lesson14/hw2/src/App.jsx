import React, { useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [visible, setVisibility] = useState(true);

  return (
    <div>
      <button onClick={() => setVisibility(!visible)}>Toggle</button>
      <div>
        {visible && (
          <div>
            <Clock location={"New York"} offset={-5} />
            <Clock location={"Kyiv"} offset={3} />
            <Clock location={"London"} offset={0} />
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
