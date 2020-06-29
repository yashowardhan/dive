import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        DiveIn
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
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Recommend() {
  const classes = useStyles();
  const thankYouMessage = <p>Thank you for your input!</p>;
  const notify = (submit) => toast("Wow so easy !");

  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [isSent, setIsSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    fetch(`https://xandar.pinnium.in/api/dive-in/users/suggest`, {
      method: "POST",
      body: JSON.stringify({ name, topic, category }),
    })
      .then(() => setIsSent(true))
      .catch(() => alert("There was an error, please try again"));
    console.log(e, name, topic, category, "button clicked");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Recommend Topics
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Article Name"
            name="name"
            autoComplete="article-name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="topic"
            label="Topic Name"
            id="topic"
            autoComplete="topic-name"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="categroy"
            label="Article Category"
            id="category"
            autoComplete="category-name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
            //onClick={notify}
          >
            Submit
          </Button>
        </form>
        {isSent ? thankYouMessage : ""}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
