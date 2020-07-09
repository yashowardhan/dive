import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import Container from "@material-ui/core/Container";
import {
  useHistory,
  useLocation
} from "react-router-dom";

const CustomTextTypography = withStyles({
  root: {
    color: "#456E5E",
  }
})(Typography);

const CustomLink = withStyles({
  root: {
    color: "#456E5E",
  }
})(Link);

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#456E5E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#456E5E',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#456E5E',
      },
      '&:hover fieldset': {
        borderColor: '#456E5E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#456E5E',
      },
    },
  },
})(TextField);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="#456E5E">
        Flikc!
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DDEDE7"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#456E5E",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "#456E5E",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#456E5E",
    color: "DDEDE7",
      '&:hover': {
        backgroundColor: '#456E5E',
      },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/topics" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    fetch(`https://xandar.pinnium.in/api/dive-in/users/login`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 400) {
          res.json().then((res) => {
            toast.error(res.error.message);
          })
        }
        if (res.status === 500) {
          toast.error('Something went wrong. Try Again!')
        }

        if (res.status === 200) {
          res.json().then((res) => {
            const { result } = res;
            const { userId, token } = result
            sessionStorage.setItem("isLoggedIn", true);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("token", token);
          }).then(() => {
            toast.success("Signed In");
            history.replace(from);
          })
        }
      })
      .catch(() => alert("There was an error, please try again"));
    console.log(e, "button clicked");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <CustomTextTypography component="h1" variant="h5">
          Sign in
        </CustomTextTypography>
        <form className={classes.form} noValidate>
          <CustomTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <CustomLink href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </CustomLink>
            </Grid>
          </Grid>
        </form> 
        <ToastContainer draggable={false} transition={Bounce} autoClose={3000} />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
