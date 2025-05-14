import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [displayName, handleDislayName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    handleDislayName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {displayName}! </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
        //onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
