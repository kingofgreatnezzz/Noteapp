import React, { useState } from "react";

export default function TestForm() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handlechnage = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("form submitted", value);
    console.log('dis is the mgs........', value)
  };

  return (
    <>
      <div>
      <form
        style={{
          textAlign: "center",
          color: "blue",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ color: "greenyellow" }}>My form</h2>
        <select value={value} onChange={handlechnage}>
          <option value={"HTML"}> Html</option>
          <option value={"css"}> css</option>
          <option value={"python"}> python </option>
          <option value={"javascrips"}> javascripts </option>
        </select>
        <br />
        <button type="submit"> submit</button>
      </form>
      <h4 style={{ color: "green" }}>{result}</h4>
      </div>

    </>
  );
}
