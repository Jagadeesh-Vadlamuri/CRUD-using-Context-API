import React, { useContext } from "react";
import { store } from "./App";

const Student = () => {
  const [data, setData] = useContext(store);
  return (
    <div className="container mt-4">
      <h3>Student and Teacher COUNT - {data.length}</h3>
    </div>
  );
};

export default Student;
