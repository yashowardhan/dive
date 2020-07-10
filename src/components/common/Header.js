import React, { useState, useEffect } from "react";
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
import { render } from "@testing-library/react";

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
    backgroundColor: "#FFFFFF",
    boxShadow: 'none'
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
      backgroundColor: '#009362',
    },
    borderRadius: '20px',
  }
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(
    sessionStorage.getItem('userId')
  );
  const userId = sessionStorage.getItem('userId');
  let isLoggedIn = false;
  if (userId) {
    isLoggedIn = true;
  }

  const logout = () => {
    console.log("lalalala");
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('token');
    setValue({});
  }

  useEffect(() => {
    // Update the document title using the browser API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CustomAppBar position="static">
        
        <CustomToolbar>
          <img src="https://res.cloudinary.com/dnfytuibw/image/upload/v1594384753/Flick_cglc4l.jpg" height="45px"/>
          <Typography href="/" variant="h6" style={{ color: "black" }} className={classes.title}>
            
          </Typography>

          {!userId && <Button href="/signin" className={classes.submit} >
            {"Sign In"}
          </Button>}
          {userId && <Button href="/signin" onClick={logout} className={classes.submit} >
            {"Sign Out"}
          </Button>}
        </CustomToolbar>
      </CustomAppBar>
      <Divider style={{backgroundColor: '#DDDDDD'}} />
      <Divider style={{backgroundColor: '#DDDDDD'}} />
      </div>
      
  );
}
