import React, { Component, Fragment } from 'react';
import { Timeline, Event } from "react-timeline-scribble";


class Tourdates extends Component {
  render() {
    return (
      <Fragment>
        <Timeline>
          <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </Event>
          <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </Event>
          <Event interval={"2016 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </Event>
          <Event interval={"2016 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </Event>
        </Timeline>
      </Fragment>
    );
  }
}

export default Tourdates;
