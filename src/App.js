import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <h1>hi</h1> */}
      {/* <Register /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
