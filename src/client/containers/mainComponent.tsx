/**
 * Importing dependencies.
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

/**
 * Importing components.
 */
import Root from "../components/rootComponent";
import NotFound from "../components/notFoundComponent";
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
          <Switch>
            <Route exact path="/" component={Root} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Main;