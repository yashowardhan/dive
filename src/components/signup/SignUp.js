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
    color: "#314455",
  }
})(Typography);

const CustomLink = withStyles({
  root: {
    color: "#373546",
  }
})(Link);

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#314455',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#314455',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#314455',
      },
      '&:hover fieldset': {
        borderColor: '#314455',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#314455',
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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EFEBF8"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#314455",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "red",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#314455",
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: '#314455',
    },
  input: {
    color: '#456E5E',
    }
  },
}));

export default function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/signin" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const submit = (e) => {
    e.preventDefault();
    fetch(`https://xandar.pinnium.in/api/dive-in/users/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, email, password }),
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
            toast.success("SuccessFully Registered");
          }).then(() => {
            history.replace(from);
          })
        }
      })
      .catch(() => alert("There was an error, please try again"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <CustomTextTypography component="h1" variant="h5">
          Sign up
        </CustomTextTypography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="lname"
                InputProps={{
                  className: classes.input
                }}
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                InputProps={{
                  className: classes.input
                }}
                autoComplete="email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                classname={classes.input}
                autoComplete="current-password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <CustomLink href="/" variant="body2">
                Already have an account? Sign in
              </CustomLink>
            </Grid>
          </Grid>
        </form>
        <ToastContainer draggable={false} transition={Bounce} autoClose={3000} />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
