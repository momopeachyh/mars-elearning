import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
