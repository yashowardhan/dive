import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

const CustomToolbar = withStyles({
  root: {
    color: "#DDEDE7",
    backgroundColor: "#456E5E",
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

  return (
    <div className={classes.root}>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Typography variant="h6" className={classes.title}>
            Flikc!
          </Typography>
          <Link href="/signin" variant="body2" style={{ color: "white" }}>
            {"Log In"}
          </Link>
        </CustomToolbar>
      </CustomAppBar>
    </div>
  );
}
