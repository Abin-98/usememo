import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Demo from "./Demo/Demo";
import Button from "./UI/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [ascending, setAscending] = useState(true);
  const [orderTitle, setOrderTitle] = useState("Change to Descending Order");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeOrderHandler = () => {
    setAscending(!ascending);
    setOrderTitle(() => {
      if (ascending) return "Change to Descending Order";
      else return "Change to Ascending Order";
    });
  };

  return (
    <div className="app">
      <Demo title={listTitle} items={listItems} order={ascending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{orderTitle}</Button>
    </div>
  );
}

export default App;
