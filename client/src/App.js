import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Employee from "./components/Employee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/update/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
