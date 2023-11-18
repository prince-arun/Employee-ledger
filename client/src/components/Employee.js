import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Employee = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://weary-hoodie-bull.cyclic.app/api/employee")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN");
  };

  //Deleting User

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete the Data?");
    if (confirm) {
      axios
        .delete(`https://weary-hoodie-bull.cyclic.app/api/employee/${id}`)
        .then((res) => {
          alert("Data deleted Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (data.length === 0) {
    navigate("/home");
  }
  return (
    <>
      <div>
        <Navbar className="bg-body-secondary">
          <Container>
            <h2 className="custom-brand">Employce</h2>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to={"/home"}>
                  <Button variant="success">Add Data +</Button>{" "}
                </Link>

                <Link to={"/login"}>
                  <Button className="ms-4" variant="dark">
                    Sign out
                  </Button>
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
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
                    <Button
                      onClick={(e) => handleDelete(employee._id)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
