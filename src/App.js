import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Registered from "./component/Registered";
import Account from "./component/Account";
import UpdateAccount from "./component/UpdateAccount";
import DeleteAccount from "./component/DeleteAccount";
import CourseList from "./component/CourseList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/updateAccount" element={<UpdateAccount />} />
          <Route path="/deleteAccount" element={<DeleteAccount />} />
          <Route path="/courses" element={<CourseList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
