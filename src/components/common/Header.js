import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Logo from "../../../src/flikcLogo.jpeg"
import {
  useHistory,
  useLocation
} from "react-router-dom";
import { borderColor } from "@material-ui/system";

const CustomToolbar = withStyles({
  root: {
    color: "#DDEDE7",
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    //#314455
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
  submit: {
    margin: theme.spacing(0, 0, 0),
    backgroundColor: "#009362",
    fontSize: '12px',
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: '#314455',
    },
    borderRadius: '20px',
  }
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
          <img src="https://res.cloudinary.com/dnfytuibw/image/upload/v1594384753/Flick_cglc4l.jpg" height="45px"/>
          <Typography href="/" variant="h6" style={{ color: "black" }} className={classes.title}>
            
          </Typography>

          {(isLoggedIn===false) && <Button href="/signin" className={classes.submit} >
            {"Log In"}
          </Button>}
          {isLoggedIn && <Button href="/signin" onClick={logout} style={{ color: "black" }} >
            {"Sign Out"}
          </Button>}
        </CustomToolbar>
      </CustomAppBar>
      <Divider style={{backgroundColor: '#000000'}} dark />
      </div>
      
  );
}
