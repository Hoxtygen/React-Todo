import React, { Component } from "react";

export default class Container extends Component {
  constructor() {
    super();
    this.state = [
      {
        id: 1,
        todoName: "Go to a meeting in Maryland"
      },
      {
        id: 2,
        todoName: "Take the kids to Jurasic park"
      },
      {
        id: 3,
        todoName: "Attend Organization end of the year party"
      },
      {
        id: 4,
        todoName: "Say no to offer from Wasteland"
      },
      {
        id: 5,
        todoName: "Go to the rendezvous for some downtime"
      },
      {
        id: 6,
        todoName: "Solve the mystery surrounding the dancing men"
      }
    ];
  }

  render() {
    return <div />;
  }
}
