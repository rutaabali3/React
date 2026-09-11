// This component demonstrates the onMouseOver event

import { useState } from "react";

function HoverMessage() {
  // State to store the message shown on screen
  const [message, setMessage] = useState("Move your mouse over the box");

  // State to store the box color
  const [color, setColor] = useState("transparent");

  // Runs when the mouse enters the box
  function handleMouseOver() {
    setMessage("Mouse is over the box");
    setColor("blue");
  }

  // Runs when the mouse leaves the box
  function handleMouseLeave() {
    setMessage("Move your mouse over the box");
    setColor("transparent");
  }

  return (
    <div>
      <h2>Mouse Over Example</h2>

      <p>{message}</p>

      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "250px",
          height: "100px",
          border: "2px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto 0",
          cursor: "pointer",
          backgroundColor: color,
        }}
      >
        Hover Over Me
      </div>
    </div>
  );
}

export default HoverMessage;