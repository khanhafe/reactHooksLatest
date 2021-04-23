import React from "react";

const Accordion = ({ items }) => {
  const ontitleClicked = (index) => {
    console.log(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <div className="divdesign">
        <p onClick={() => ontitleClicked(index)}>{item.title}</p>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Accordion;
