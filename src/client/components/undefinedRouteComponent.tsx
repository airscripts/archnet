/**
 * Importing all the dependecies for the Material UI
 * Mini Drawer.
 */
import React from "react";

/**
 * Importing styles for apply styles to the components.
 */
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Importing Material-UI Components.
 */
import Grid from "@material-ui/core/Grid";

/**
 * Importing styles for apply styles to the components.
 */
import { undefinedRouteStyles } from "../styles/undefinedRouteStyles";
import { Typography } from "@material-ui/core";

/**
 * This function declares RootDrawer that comprehends 
 * AppBar and Drawer.
 * At the beginning of the function, the styles are applied
 * to the constants, so that they can be used in the components
 * to style them.
 */
function UndefinedRouteComponent() {
  const classes = undefinedRouteStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        className={classes.grid}
      >
        <Typography variant="h6">
          {`Archie cannot help you... :(`}
        </Typography>
      </Grid>
    </div>
  );
}

export default UndefinedRouteComponent;
