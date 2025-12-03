import React, { Component,lazy,Suspense } from "react";
// import Student from "./Student";

const StudentData = lazy(() => import("./Student"));
export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.state = {
      show: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componenet did mount");
  }
  componentDidUpdate() {
    console.log("componenet did update");
  }

  render() {
    console.log("render");

    return (
      <>
        <h1 style={{ color: "red" }}>Componenet Life Cycle Methods</h1>
        <h2>3 phases Componenet Life Cycle Methods</h2>
        <h4>Componenet Will unmount</h4>
        <h4>count:{this.state.count}</h4>
        <button
          onClick={() => this.setState({ count: 2 })}
          style={{ backgroundColor: "orange" }}
        >
          Increment
        </button>
        {this.state.show ? (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <StudentData />
          </Suspense>
        ) : (
          "child component"
        )}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>

        <br />
        <button style={{ margin: "10px", backgroundColor: "pink" }}>
          Load Component
        </button>
        <button style={{ margin: "10px", backgroundColor: "pink" }}>
          Update Componenet
        </button>
        <button style={{ backgroundColor: "pink" }}>
          {" "}
          Remove (unmount) componenet
        </button>
      </>
    );
  }
}
