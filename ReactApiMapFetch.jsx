import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function FetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((res) => res.json());
      setData(response);
      console.log(response);
    }
    FetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {[...data].slice(0, 10).map((result) => (
        <li key={result.id}>{result.title}</li>
      ))}
      <h2>Start editing to see some magic happen!</h2>
      {[...data]
        .slice(0, 20)
        .filter((result) => result.title.length > 10)
        .map((res) => (
          <li key={res.id}>{res.title}</li>
        ))}
    </div>
  );
}
