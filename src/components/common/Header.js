import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import {
  useHistory,
  useLocation
} from "react-router-dom";

const CustomToolbar = withStyles({
  root: {
    color: "#DDEDE7",
    backgroundColor: "#3E3328"
    //#5D001E
    //logoUT:#123C69
  }
})(Toolbar);

const CustomAppBar = withStyles({
  root: {
    color: "#456E5E",
    backgroundColor: "#456E5E",
  }
})(AppBar);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  let  [,setState]=useState();
  const userId = sessionStorage.getItem('userId');
  let isLoggedIn = false;
  if (userId) {
    isLoggedIn = true;
  }

  const handleUpdate = () => {
    //passing empty object will re-render the component
   setState({});
  
  }

  const logout = () => {
    console.log("lalalala");
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('token');
    setState({});
  }

  return (
    <div className={classes.root}>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Typography variant="h6" style={{ color: "white" }} className={classes.title}>
            Flikc!
          </Typography>

          {(isLoggedIn===false) && <Button href="/signin" style={{ color: "white" }} >
            {"Log In"}
          </Button>}
          {isLoggedIn && <Button href="/signin" onClick={logout} style={{ color: "white" }} >
            {"Sign Out"}
          </Button>}
        </CustomToolbar>
      </CustomAppBar>
    </div>
  );
}
