/**
 * Importing styles for apply styles to the components.
 */
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Defining the classes that will apply styles to the 
 * Material UI Components.
 */
export const undefinedRouteStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 320
    },
    grid: {
      height: "100vh",
    },
  })
);