import React, {createContext, useState, useMemo} from 'react';
import AdminDashboard from './AdminDashboard';
import Student from './Student';
import Teacher from './Teacher';

export const store = React.createContext()
const App = () => {
  const [data, setData] = useState([
    {
      student: "Ravi",
      location: "Mumbai",
      teacher: "Madhu",
      age: 50
    },
    {
      student: "Vinay",
      location: "Pune",
      teacher: "Kiran",
      age: 65
    },
    {
      student: "Raju",
      location: "Kolkata",
      teacher: "Bala",
      age: 40
    }
  ])
  
  return (
    <store.Provider value={[data, setData]}> 
      <Student />
      <Teacher />
      <AdminDashboard datum={data}/>
    </store.Provider>
  )
}

export default App