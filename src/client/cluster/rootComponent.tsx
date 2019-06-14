/**
 * Importing components from libraries.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Importing Dashboard.
 */
import DashboardComponent from "../containers/dashboardComponent";

/**
 * Importing Material-UI Components.
 */
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

/**
 * Importing styles.
 */
import "../styles/rootStyles.css";

/**
 * Importing actions and AppState from Redux Store.
 */
import { loadRoot } from "../store/actions/rootActions";
import { AppState } from "../store/store";

/**
 * Defining the AppProps interface.
 */
interface AppProps {
  root: any,
  loadRoot: Function,
};

/**
 * Defining the IState interface.
 */
interface IState {
  loading: boolean,
};

/**
 * Root Component that will be represented when the user
 * hits the / endpoint.
 */
class Root extends Component<AppProps, IState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    await this.props.loadRoot();
    await this.sleep(3000);

    await this.setState({
      loading: false,
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  render() {
    if (this.state.loading) {
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          className="rootComponentLoading"
        >
          <CircularProgress 
            color="inherit" 
          />
        </Grid>
      );
    }

    else if (this.props.root.root !== undefined) {
      return (
        <React.Fragment>
          <DashboardComponent 
            dashboardRoot={this.props.root.root} 
          />         
        </React.Fragment>
      );
    }
  }
}

/**
 * Mapping redux store state to component props.
 * 
 * @param state
 */
const mapStateToProps = (state: AppState) => {
  return {
      root: state.root,
  }
};

/**
* Exporting Dashboard and connecting it to the redux store.
*/
export default connect(mapStateToProps, { loadRoot })(Root);