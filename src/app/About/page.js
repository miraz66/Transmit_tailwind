"use client";

import { useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function countIncrement() {
    setCount(count + 1);
    countRef.current++;

    console.log("count: " + count);
  }

  return <div>page</div>;
}
