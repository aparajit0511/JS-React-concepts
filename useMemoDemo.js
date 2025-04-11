-----------------------Long version ---------------------------------
import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [array, setArray] = useState(() => {
    return Array.from({ length: 100000 }, () =>
      Math.floor(Math.random() * 100000)
    );
  });

  const onGenRandomNum = () => {
    setArray((prev) => [...prev, Math.floor(Math.random() * 100000)]);
  };

  const MaxNum = useMemo(() => {
    return Math.max(...array);
  }, [array]);

  console.log(array);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onGenRandomNum}>Generate Random Number</button>
      <h3>Largest Number is : {MaxNum}</h3>
      {/* <h4>Array Length: {array.length()}</h4> */}
    </div>
  );
}


---------------------------------------------Short Version ---------------------------------------------------

import { useMemo } from "react";
import "./styles.css";

export default function App() {
  var array = [1, 2, 3, 4, 5, 6];

  const maxNum = useMemo(() => {
    return Math.max(...array);
  }, [array]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Largest Number: {maxNum}</h3>
    </div>
  );
}
