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
  Typography, 
  Paper,
  Button,
  Grid, 
} from "@material-ui/core";

/**
 * Importing icons that will be placed inside the drawer.
 */
import Description from "@material-ui/icons/Description";
import Wifi from "@material-ui/icons/Wifi";
import Done from "@material-ui/icons/Done";
import Language from "@material-ui/icons/Language";
import Home from "@material-ui/icons/Home";

/**
 * Importing styles for apply styles to the components.
 */
import { aboutYouStyles } from "../styles/aboutYouStyles";

/**
 * Importing utils.
 */
import copyToClipboard  from "../utils/copyToClipboard";

/**
 * Importing transitions.
 */
import Grow from "@material-ui/core/Grow";

/**
 * This function declares AboutYouComponent that
 * tells you your IP Address and your country.
 */
function AboutYou(aboutRoot: any) {
  const classes = aboutYouStyles();
  const [copyState, setCopyState] = React.useState(false);

  return ( 
    <Paper className={classes.paper}>
      {/* 
        * About You Paper, that display information about your
        * IP Address, Country and CC.
        */}
      <Typography variant="h6" component="h3" className={classes.aboutTypography}>
        About you
      </Typography>
      
      <Grid container>
        <Grid item xs={2}>
          <Wifi className={classes.wifiIcon} /> 
        </Grid>

        <Grid item xs={6}>
          <Typography component="p" className={classes.ipTypography}>
            <span>{aboutRoot.aboutRoot.dashboardRoot.ip}</span>
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Button 
            variant="contained" 
            size="small" 
            className={classes.button} 
            onClick={() => {
              copyToClipboard(aboutRoot.aboutRoot.dashboardRoot.ip);
              setCopyState(true);
            }}>

            { copyState 
            
              ? <Grow 
                  in={copyState} 
                  {...(copyState ? {timeout: 1500} : {})}
                >
                  <div className={classes.copyButtonDiv}>
                    <Done className=
                      {clsx(classes.leftIcon, classes.iconSmall)} />
                    Copied
                  </div>
                </Grow>

              :  <div className={classes.copyButtonDiv}> 
                  <Description className=
                    {clsx(classes.leftIcon, classes.iconSmall)} />
                  Copy
                </div>
            }
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}>
          <Home className={classes.homeIcon} /> 
        </Grid>

        <Grid item xs={6}>
          <Typography component="p" className={classes.countryTypography}>
            <span>{aboutRoot.aboutRoot.dashboardRoot.country}</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2}>
          <Language className={classes.wifiIcon} /> 
        </Grid>

        <Grid item xs={6}>
          <Typography component="p" className={classes.ipTypography}>
            <span>{aboutRoot.aboutRoot.dashboardRoot.cc}</span>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AboutYou;