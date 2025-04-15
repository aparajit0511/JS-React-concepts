// App.js
import { useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [useColor, setUseColor] = useState("");
  const onchangeColor = (color) => {
    setUseColor(color);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Set color is: {useColor}</h2>
      <h2>Start editing to see some magic happen!</h2>
      <Child useColor={useColor} onchangeColor={onchangeColor} />
    </div>
  );
}


// Child.js
import { useState } from "react";

export default function Child(props) {
  //   const [color, setColor] = useState("blue");
  //   props.onchangeColor(color);

  return (
    <>
      <button onClick={() => props.onchangeColor("red")}>Red</button>
      <button onClick={() => props.onchangeColor("brown")}>Brown</button>
    </>
  );
}
