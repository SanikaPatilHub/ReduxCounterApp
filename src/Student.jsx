import React, { Component } from "react";

class Student extends Component {
  componentWillUnmount() {
    console.log("componenet will unmount");
  }
  render() {
    return (
      <>
        <h1 style={{ color: "red" }}>Student</h1>
      </>
    );
  }
}
export default Student;
