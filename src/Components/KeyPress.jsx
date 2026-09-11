// This component demonstrates the onKeyDown event

import { useState } from "react";

function KeyPress() {
  // Stores the last key pressed by the user
  const [pressedKey, setPressedKey] = useState("");

  // Runs whenever a key is pressed down
  function handleKeyDown(event) {
    // event.key contains the key name
    setPressedKey(event.key);
  }

  return (
    <div>
      <h2>OnKeyDown Example</h2>

      <input
        type="text"
        placeholder="Press any key..."
        onKeyDown={handleKeyDown}
      />

      <p>Last key pressed: {pressedKey}</p>
    </div>
  );
}

export default KeyPress;