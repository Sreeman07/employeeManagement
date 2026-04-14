import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate();
  const gotoEmployee=(empObj)=>{
    navigate("/employee",{state:empObj})
  }
  const gotoEditEmployee=(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }
  const deleteEmpId=async(id)=>{
    let res = await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
    if(res.status==200)
      getEmps();
  }
  async function getEmps(){
    let res=await fetch("http://localhost:4000/emp-api/employees")
    if(res.status==200){
      let resObj=await res.json();
      setEmps(resObj.payload);
    }
  }

useEffect(() => {
  getEmps();
}, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p className="mb-5">{empObj.name}</p>
            <div>
              <button onClick={()=>gotoEmployee(empObj)} className="bg-green-300 p-3 rounded-3xl">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)}className="bg-red-300 p-3 rounded-3xl">Edit</button>
              <button onClick={()=>deleteEmpId(empObj._id)}className="bg-blue-300 p-3 rounded-3xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
