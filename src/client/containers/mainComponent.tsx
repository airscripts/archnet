/**
 * Importing dependencies.
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";

/**
 * Importing components.
 */
import Root from "../components/rootComponent";
import { configureStore } from "../store/store";

/**
 * Importing styles.
 */
import "../styles/mainComponent.css";

const store = configureStore();

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="mainComponentBody bg-dark">
            <Route exact path="/" component={Root} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Main;