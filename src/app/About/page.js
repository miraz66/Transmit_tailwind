"use client";

import { useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return <div>page</div>;
}
