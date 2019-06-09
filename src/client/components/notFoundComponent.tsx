/**
 * Importing components from libraries.
 */
import React, { Component } from "react";
import UndefinedRouteComponent from "./undefinedRouteComponent";

/**
 * Defining the AppProps interface.
 */
interface AppProps {

}
  
/**
 * Defining the IState interface.
 */
interface IState {

}

class NotFound extends Component<AppProps, IState> {
  render() {
    return (
      <React.Fragment>
        <UndefinedRouteComponent />
      </React.Fragment>
    );
  }
}

export default NotFound;