import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is React",
    content: "React is a JS framework"
  },
  {
    title: "why use React",
    content: "React is famous in front end developers"
  },
  {
    title: "how do you use React",
    content: "React by creating components"
  }
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
