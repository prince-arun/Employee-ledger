import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Employee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employee")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN");
  };

  return (
    <div className="employee d-flex flex-column justify-center align-items-center bg-light vh-100">
      <h1>Employee's List</h1>
      <div className="w-100 rounded bg-white border shadow p-4">
        <table className="table table-striped">
          <thead className="text-center">
            <tr>
              <th className="border">No.</th>
              <th className="border">Name</th>
              <th className="border">D.O.B</th>
              <th className="border">Gender</th>
              <th className="border">Email</th>
              <th className="border">Phone</th>
              <th className="border">Industry</th>
              <th className="border">Work</th>
              <th className="border">Country</th>

              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, i) => (
              <tr key={employee._id}>
                <td className="border">{i + 1}</td>
                <td className="border">{employee.name}</td>
                <td className="border">{formatDate(employee.dob)}</td>
                <td className="border">{employee.gender}</td>
                <td className="border">{employee.email}</td>
                <td className="border">{employee.phone}</td>
                <td className="border">{employee.industry}</td>
                <td className="border">{employee.workingHours}</td>
                <td className="border">{employee.country}</td>
                <td className="border">
                  <Link to={`/update/${employee._id}`}>
                    {" "}
                    <Button variant="outline-success">Edit</Button>{" "}
                  </Link>
                  <Button variant="outline-danger">Delete</Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
