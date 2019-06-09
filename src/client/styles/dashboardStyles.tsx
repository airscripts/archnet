/**
 * Importing styles for apply styles to the components.
 */
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Defining the drawer width.
 */
const drawerWidth = 240;

/**
 * Defining the classes that will apply styles to the 
 * Material UI Components.
 */
export const dashboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 320,
    },
    
    appBar: {
      zIndex: theme.zIndex.drawer + 1,

      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,

      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    menuButton: {
      marginRight: 36,
    },

    hide: {
      display: "none",
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },

    drawerOpen: {
      width: drawerWidth,

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      overflowX: "hidden",
      width: theme.spacing(7) + 1,

      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },

    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    paper: {
      padding: theme.spacing(3, 2),
      width: 320,
      backgroundColor: "#212121"
    },
  }),
);