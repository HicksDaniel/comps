import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleDown } from "react-icons/fa";

export default function Accordian({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //   const handleClick = (nextIndex) => {
  //     if (expandedIndex === nextIndex) {
  //       setExpandedIndex(-1);
  //     } else {
  //       setExpandedIndex(nextIndex);
  //     }
  //   };
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex == nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaArrowAltCircleDown /> : <FaArrowAltCircleLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return (
    <div className="justify-self-center w-sm border-x border-t rounded">
      {renderedItems}
    </div>
  );
}
