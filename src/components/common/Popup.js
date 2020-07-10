import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';  

import Modal from "@material-ui/core/Modal";
import { flexbox } from "@material-ui/system";
import { isCatchClause } from "@babel/types";
import { callbackify } from "util";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 20;
  const left = 20;
  const bottom = 20;

    return {
      top: `${top}%`,
      margin:'auto',
      // left: `${left}%`,
      // transform: `translate(-${top}%, -${left}%)`,
      backgroundColor: '#FFFFFF',
      display:'block'
    };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "97%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    height: "98%",
    display: 'block',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(0 , 0, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#314455",
    color: "DDEDE7",
      '&:hover': {
        backgroundColor: '#456E5E',
      },
  },
  iframe: {
    height: '100%',
    width: '98%'
  },
  grid: {
    height: 'calc(100% - 32px)',
    position: 'relative',
  }
}));

export default function Popup(props) {
  console.log(props);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
      <Button size='small' style={{ color: '#314455'}} onClick={handleClose}>Close</Button>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height: 'calc(100% - 32px)', position: 'relative'}}
      >
        <iframe className={classes.iframe} src={props.url} ma></iframe>
      </Grid>
    </div>
  );

  return (
    <div>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOpen}
          >
            Read More..
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{height: 'flex', display:'flex',alignItems:'center',justifyContent:'center'}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
        {body}
      </Modal>
    </div>
  );
}
