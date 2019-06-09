/**
 * Importing all the dependecies for the Material UI
 * Mini Drawer.
 */
import React from "react";
import clsx from "clsx";

/**
 * Importing styles for apply styles to the components.
 */
import { createStyles, makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Importing Components from Material-UI.
 */
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

/**
 * Importing icons that will be placed inside the drawer.
 */
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Info from "@material-ui/icons/Info";
import Settings from "@material-ui/icons/Settings";
import Dashboard from "@material-ui/icons/Dashboard";

/**
 * Defining the drawer width.
 */
const drawerWidth = 240;

/**
 * Defining the classes that will apply styles to the 
 * Material UI Components.
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
  }),
);

/**
 * This function declares RootDrawer that comprehends 
 * AppBar and Drawer.
 * At the beginning of the function, the styles are applied
 * to the constants, so that they can be used in the components
 * to style them.
 */
function RootDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > 
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"    
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap>
            Archnet
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon><Dashboard htmlColor="#fff" /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon><Settings htmlColor="#fff" /></ListItemIcon>   
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem button>
            <ListItemIcon><Info htmlColor="#fff" /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
        
      </Drawer>
    </div>
  );
}

export default RootDrawer;
