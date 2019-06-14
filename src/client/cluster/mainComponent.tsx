/**
 * Importing dependencies.
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

/**
 * Importing dependencies from Material-UI.
 */
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Importing components.
 */
import Root from "./rootComponent";
import NotFound from "../containers/notFoundComponent";
import { configureStore } from "../store/store";

/**
 * Importing styles.
 */
import "../styles/mainComponent.css";
import { darkTheme } from "../assets/themes/darkTheme";

const store = configureStore();

/**
 * Main Component of Archnet, here you can manage everything.
 */
class Main extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
        <Provider store={store}>
          <Router>
            <Switch>
                <Route exact path="/" component={Root} />
                <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Main;