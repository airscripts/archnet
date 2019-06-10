/**
 * Importing components from libraries.
 */
import React, { Component } from "react";
import UndefinedRouteComponent from "../components/undefinedRouteComponent";

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

/**
 * The NotFound Component, manages all the undefined routes
 * and prints on the screen the 404 page.
 */
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