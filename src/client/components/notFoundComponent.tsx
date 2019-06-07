/**
 * Importing components from libraries.
 */
import React, { Component } from "react";

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
      <p>404: Not Found.</p>
    );
  }
}

export default NotFound;