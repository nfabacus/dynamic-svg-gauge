import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [length, setLength] = useState(200);
  const gaugeValue = length / 1.0593849417;
  return (
    <div class="Wrapper">
      <div>Length: {length}</div>
      <div className="RadialChart">
        <svg className="svgBox" viewBox="0 0 350 350">
          <circle
            className="track"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#F5F3F3"
            stroke-width="20"
            fill="none"
            strokeDasharray={`943, 943`}
          />
          <circle
            className="gauge"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#FDE47F"
            strokeWidth="20"
            fill="none"
            strokeDasharray={`${gaugeValue}, 943`}
          />
          <text x="50%" y="50%" fontSize="25px" text-anchor="middle" dy=".3em">
            Title Text Here
          </text>
          <text x="50%" y="60%" fontSize="30px" text-anchor="middle" dy=".3em">
            {length}
          </text>
        </svg>
      </div>
      <div>
        <input
          type="number"
          onChange={e => {
            setLength(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
