/**
 * Importing all the dependecies for the Material UI
 * Mini Drawer.
 */
import React from "react";
import clsx from "clsx";

/**
 * Importing Components from Material-UI.
 */
import { 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  Divider, 
  IconButton, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Paper } from "@material-ui/core";

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
 * Importing styles for apply styles to the components.
 */
import { useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { dashboardStyles } from "../styles/dashboardStyles";


/**
 * This function declares RootDrawer that comprehends 
 * AppBar and Drawer.
 * At the beginning of the function, the styles are applied
 * to the constants, so that they can be used in the components
 * to style them.
 */
function DashboardComponent(root: any) {
  const classes = dashboardStyles();
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

      {/* 
        * Below it's described the AppBar component that will
        * work gently with the Drawer Component.
        */}
      <AppBar
        position="fixed"
        className=
          {clsx(classes.appBar, { [classes.appBarShift]: open,})}
      > 
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"    
            className=
              {clsx(classes.menuButton, {[classes.hide]: open,})}
        >
            <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" noWrap>
            Archnet
        </Typography>
        </Toolbar>
      </AppBar>

      {/* 
        * This is the Mini Drawer Component.
        */}
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
          <IconButton color="inherit" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? 
              <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button selected={true}>
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
      
      {/* 
        * In here you find a paper that represents your IP Address.
        */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h3">
            Your IP Address
          </Typography>
          
          <Typography component="p">
            {root.root.ip}
          </Typography>
        </Paper>
      </main>
    </div>
  );
}

export default DashboardComponent;
