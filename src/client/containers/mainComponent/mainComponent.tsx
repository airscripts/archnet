/**
 * Importing dependencies.
 */
import React, { Component } from "react";

/**
 * Importing components.
 */
import General from "../../components/generalSpecsComponent";

/**
 * Importing styles.
 */
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/mainComponent.css";

class Main extends Component {
  render() {
    return (
      <div className="mainComponentBody bg-dark">
        <General />
      </div>
    );
  }
}

export default Main;