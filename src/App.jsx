import { useState } from "react";
import Link from "./components/Link";

export default function App() {
  return (
    <div className="flex ">
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
    </div>
  );
}
