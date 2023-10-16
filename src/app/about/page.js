"use client";

import { useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const countIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("count: " + count);
    console.log("countRef: " + countRef.current);
  };

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>
        <p>{count}</p>

        <button onClick={() => countIncrement()}>Increment</button>
      </div>
    </div>
  );
}
