import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordian from "./components/Accordian";
import { AiFillBug, AiFillApple, AiFillBulb } from "react-icons/ai";

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "I can kinda use React",
      content:
        "You can too! You can too! You can too! You can too! You can too! You can too! You can too! You can too! ",
    },
    {
      id: 2,
      label: "I can kinda use React",
      content:
        "You can too! You can too! You can too! You can too! You can too! You can too! You can too! You can too! ",
    },
    {
      id: 3,
      label: "I can kinda use React",
      content:
        "You can too! You can too! You can too! You can too! You can too! You can too! You can too! You can too! ",
    },
  ];

  return (
    <>
      <Accordian items={items} />
    </>
  );
}
