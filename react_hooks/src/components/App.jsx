import React, { useState } from "react";

function App() {
  setInterval(updated, 1000);
  let time = new Date().toLocaleTimeString();
  const [initTime, afteraSec] = useState(time);
  function updated() {
    const newTime = new Date().toLocaleTimeString();
    afteraSec(newTime);
  }

  return (
    <div className="container">
      <h1>{initTime}</h1>
      <button onClick={updated}>Get Time</button>
    </div>
  );
}

export default App;
