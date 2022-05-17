import React from "react";
import Navbar from "./Navbar";
import "./style.css";

function CourseList(props) {
  return (
    <div className="CourseList">
      <Navbar />
      <div className="body">
        <h1 className="heading">Courses</h1>
      </div>
    </div>
  );
}

export default CourseList;
