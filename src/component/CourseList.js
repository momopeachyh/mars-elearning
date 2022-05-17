import React from "react";
import Navbar from "./Navbar";

function CourseList(props) {
  return (
    <div className="CourseList">
      <Navbar />
      <div className="body">
        <h1>Courses</h1>
      </div>
    </div>
  );
}

export default CourseList;
