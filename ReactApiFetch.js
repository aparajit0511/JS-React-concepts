import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function functionData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const jsonData = await response.json();
      console.log("Show", jsonData);

      setData(jsonData);
    }
    functionData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {[...data].map((result) => (
        <h3>{result.title}</h3>
      ))}
    </div>
  );
}
