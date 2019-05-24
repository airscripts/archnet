/**
 * Importing dependencies.
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";

/**
 * Importing components.
 */
import General from "../../components/generalSpecsComponent";
import { configureStore } from "../../store/store";

/**
 * Importing styles.
 */
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/mainComponent.css";

const store = configureStore();

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