import React, { useContext, useState } from "react";
import { store } from "./App";

const AdminDashboard = () => {
  const [data, setData] = useContext(store);
  const [text, setText] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  setText([...data, ({
      student: text.student,
      location: text.location,
      teacher: text.teacher,
      age: text.age
  })]);  
}

const handleUpdate = (id) =>{
  console.log("clicked")
  const sample = data.find((item)=> item.id==id);
  setText(sample);  
}

const handleDelete = (id) => {
  setData(data.filter((item, index)=> index!=id))
}

const handleChange = (e) => {
  setText({...text, [e.target.name]: e.target.value})
}

  return (
    <>
    <div className="container">
      <form >
        <div className="row">
          <div className="col">
            <label>Student</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Student name"
              name="student"
              onChange={handleChange}
            />
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Location name"
              name="location"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Teacher</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Teacher name"
              name="teacher"
              onChange={handleChange}
            />
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Teacher's age"
              name="age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <center>
            <button onClick={(e)=>handleSubmit(e)} type="button" className="btn btn-danger mt-3">
              Submit
            </button>
          </center>
        </div>
      </form>
    </div>
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead className="bg-warning">
          <tr>
            <th>Student Name</th>
            <th>Location</th>
            <th>Teacher Name</th>
            <th>age</th>
            <th>Modification</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.student}</td>
                <td>{item.location}</td>
                <td>{item.teacher}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={()=>handleUpdate(item.id)} className="btn btn-primary">Edit</button>{" "}
                  <button onClick={()=>handleDelete(index)} className="btn btn-success">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminDashboard;
