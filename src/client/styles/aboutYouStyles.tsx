/**
 * Importing styles for apply styles to the components.
 */
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Defining the classes that will apply styles to the 
 * Material UI Components.
 */
export const aboutYouStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(3, 2),
      width: 320,
      backgroundColor: "#212121"
    },
  
    button: {
      margin: theme.spacing(1),
    },

    leftIcon: {
      marginRight: theme.spacing(1),
    },

    rightIcon: {
      marginLeft: theme.spacing(1),
    },

    iconSmall: {
      fontSize: 20,
    },

    ipTypography: {
      marginTop: 11
    },

    wifiIcon: {
      marginTop: 10
    },

    copyButtonDiv: {
      display: "flex",
      flexDirection: "row",
    }
  })
);