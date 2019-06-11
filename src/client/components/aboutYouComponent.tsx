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
import Slide from "@material-ui/core/Slide";

/**
 * This function declares AboutYouComponent that
 * tells you your IP Address and your country.
 */
function AboutYou(aboutRoot: any) {
  const classes = aboutYouStyles();
  const [copyState, setCopyState] = React.useState(false);

  return ( 
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper className={classes.paper}>
        <Typography variant="h6" component="h3">
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
      </Paper>
    </Slide>
  );
}

export default AboutYou;