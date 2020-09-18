import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';  
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Header from "../common/Header";
import Fab from '@material-ui/core/Fab';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Link from "@material-ui/core/Link";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareIcon from "@material-ui/icons/Share";
import Chip from "@material-ui/core/Chip";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { Divider } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

import Modal from "@material-ui/core/Modal";
import { flexbox } from "@material-ui/system";
import { isCatchClause } from "@babel/types";
import { callbackify } from "util";
import {
  useHistory,
  useLocation
} from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 20;
  const left = 20;
  const bottom = 20;

    return {
      top: `${top}%`,
      //margin:'auto',
      // left: `${left}%`,
      // transform: `translate(-${top}%, -${left}%)`,
      backgroundColor: '#FFFFFF',
      display:'block'
    };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    height: "88%",
    // maxHeight: '90%',
    display: 'block',
    outline: 'none',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(0 , 0, 0),
    overflowX: 'scroll',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#009362",
    color: "DDEDE7",
      '&:hover': {
        backgroundColor: '#456E5E',
      },
    marginRight: '50px',
    marginLeft: '50px',
  },
  iframe: {
    height: '100%',
    width: '100%'
  },
  grid: {
    height: 'calc(100% - 32px)',
    position: 'relative',
  },
  root: {
    maxWidth: 345,
    backgroundColor: '#FFFFFF'
  },
  media: {
    height: 150,
    width: 375,
  },
  topic: {
    margin: theme.spacing(1, 0, 0),
    backgroundColor: "#FFFFFF",
    borderColor: '#009362',
    color: "#009362",
      '&:hover': {
        backgroundColor: '#009362',
        color: '#FFFFFF'
      },
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  },
  chip: {
    border: '1px solid',
    borderColor: '#009362',
    color: '#009362',
    borderRadius: '5px',
    backgroundColor:'#FFFFFF',
    marginRight: '5px',
    marginBottom: '5px',
    fontSize: '12px',
    height: '20px',
    textTransform: 'unset',
    padding: '0px 10px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.02)'
  },
  chipSelected: {
    border: '1px solid',
    borderColor: '#009362',
    color: '#FFFFFF',
    backgroundColor:'#009362',
    marginRight: '2px',
    marginBottom: '5px',
    fontSize: '12px',
    height: '20px',
    textTransform: 'unset',
    padding: '0px 10px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.02)'
  },
  focusHighlight: {}
}));

export default function Popup(props) {
  const classes = useStyles();
  const userId = sessionStorage.getItem('userId');
  let history = useHistory();
  let location = useLocation();
  const { article, isBookmarked, isLiked, isTag, selectedTag, setSelectedTag } = props;
  console.log("djajsdbnjasldnlasndasld",article);

  let { toSignIn } = location.state || { toSignIn: { pathname: "/signin" } };
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(isBookmarked);
  const [like, setLike] = React.useState(isLiked);
  // if (article && article.isBookmarked === true) {
  //   setBookmark(true);
  // } else {
  //   setBookmark(false);
  // }

  const handleBookmark = () => {
    const { _id: articleId } = article;
    if (!sessionStorage.getItem('userId')) {
      history.push(toSignIn);
      return;
    }
    if (bookmark === true) {
      setBookmark(false);
      fetch(`https://xandar.pinnium.in/api/dive-in/articles/activity`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, isBookmarked: false  }),
    });
    } else {
      setBookmark(true);
      fetch(`https://xandar.pinnium.in/api/dive-in/articles/activity`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, isBookmarked: true  }),
    });
    }
  }

  const handleLike = () => {
    const { _id: articleId } = article;
    if (!sessionStorage.getItem('userId')) {
      history.push(toSignIn);
      return;
    }
    if (like === true) {
      setLike(false);
      fetch(`https://xandar.pinnium.in/api/dive-in/articles/activity`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, isLiked: false  }),
    });
    } else {
      setLike(true);
      fetch(`https://xandar.pinnium.in/api/dive-in/articles/activity`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, isLiked: true  }),
    });
    }
    
    
  }

  const handleOpen = () => {
    setOpen(false);
    const { article } = props;
    const { _id: articleId } = article;
    if (userId) {
      fetch(`https://xandar.pinnium.in/api/dive-in/articles/analytics`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, analyticType: 'OPEN_ARTICLE'  }),
    });
      window.open(article.url);
    } else {
      history.push(toSignIn);
    }
  };

  const modalOpen = () => {
    setOpen(false);
    const { article } = props;
    const { _id: articleId } = article;
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/analytics`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, analyticType: 'MODAL_OPEN'  }),
    });
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };
  const goToTagPage = (tag, event) => {
    // history.replace({ pathname: `/tags/${tag}/123`})
    const { _id: articleId } = article;
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/analytics`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, analyticType: 'SELECT_TAG', tag  }),
    }).then(() => {
      window.location = `/tags/${tag}`;
    });
    event.stopPropagation();
  }
  const goToAuthorPage = (event) => {
    window.open(article.authorUrl);
    const { _id: articleId } = article;
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/analytics`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId, analyticType: 'AUTHOR_CLICK'  }),
    });
    event.stopPropagation();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
        <Button size='small' style={{ color: '#009362'}} onClick={modalClose}>Close</Button>
        </Grid>
        {article && <Grid
          container
          direction="row"
          // justify="center"
          alignItems="center"
          style={{height: 'calc(100% - 32px)', position: 'relative'}}
        >
          <CardMedia
                  className={classes.media}
                  image={props.article.imageUrl || "https://res.cloudinary.com/dnfytuibw/image/upload/v1594554749/Product/1_6ge3gXH51icSvin7oV-4-Q_ziduln.png"}
                  title="Contemplative Reptile"
          /> 
          <Typography onClick={handleOpen} gutterBottom variant="h5" component="h2" style={{ color: "#314455", fontStyle: 'bold', alignSelf: 'center', marginLeft: '25px', marginRight: '25px', marginTop: '15px' }}>
                    {article.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#2b2b2b", fontSize: '15px',  fontStyle: 'bold', marginLeft: '25px', width: 'max-content', textDecoration: 'underline' }}
                    onClick={goToAuthorPage}
                  >
                    By {article.author}
                  </Typography>
                  
                  
          {article.description && article.description.map((para) => {
        return (
          <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#807e7e", fontStyle: 'bold', alignSelf: 'center', marginLeft: '25px', marginRight: '25px', marginTop: '10px' }}
                  >
                    {para}
          </Typography>);
      })} 
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

        </Grid>}
    </div>
  );

  return (
    <div>
      {article && isBookmarked && isLiked && <React.Fragment>
            {props.article && <Card className={classes.root}>
              <CardActionArea  onClick={modalOpen} classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight
        }} >
                <CardMedia
                  className={classes.media}
                  image={props.article.imageUrl || "https://res.cloudinary.com/dnfytuibw/image/upload/v1594554749/Product/1_6ge3gXH51icSvin7oV-4-Q_ziduln.png"}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ padding: '0px'}}>
                  <Typography gutterBottom variant="h5" component="h2" style={{ color: "#1A1A1A", fontStyle: 'bold', marginLeft: '10px' }}>
                    {article.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#2b2b2b", fontStyle: 'bold', marginLeft: '10px', width: 'max-content', textDecoration: 'underline' }}
                    onClick={goToAuthorPage}
                  >
                    By {article.author}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#2b2b2b", marginLeft: '10px' }}
                  >
                    {article.categoryName} | {article.timeToRead} min read
                  </Typography>
                  {/* <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#807e7e", marginLeft: '10px' }}
                  >
                    Tags:
                  </Typography> */}
                  <div className={classes.root} style={{marginLeft:'10px', marginTop: "10px", marginBottom: '10px'}}>
                  {!isTag && article.tags && article.tags.map((tag) => {
        if (tag !== "") {
          return (
            <Fab
          value={tag} clickable variant="outlined" className={classes.chip} elevation={3}  onClick={(e) => goToTagPage(tag,e)}
          >{tag}
          </Fab>
          );
        }
      })}
      {isTag && article.tags && article.tags.map((tag) => {
        if (tag === selectedTag && tag !== "") {
          return (
          <Fab
      label={tag} href="#chip" clickable variant="outlined" className={classes.chipSelected} 
        >{tag}</Fab>);} else {
          if (tag !== "") {
            return (
              <Fab
          label={tag} href="#chip" clickable variant="outlined" className={classes.chip} onClick={(e) => goToTagPage(tag, e)}
            >{tag}</Fab>);
          }
        }
      })}     
      
                  </div>
                  
                  <Divider />
                  {/* <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#807e7e", paddingTop: '6px' }}
                  >
                    Description:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {article.description}
                  </Typography> */}
                  
                  {/* <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "#807e7e", paddingTop: '6px' }}
                  >
                    Learn About:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {article.learnings}
                  </Typography> */}
                  <Popup url={article.url} articleId={article._id}></Popup>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ marginTop: '2px', padding: '0px', justifyContent: ''}}>
                {bookmark && <IconButton aria-label="add to favorites" style={{ color: '#009362'}} onClick={handleBookmark}>
                  <BookmarkIcon fontSize="small" />
                </IconButton>}
                {!bookmark && <IconButton aria-label="add to favorites" style={{ borderColor: "#009362", color: '#009362', alignSelf: 'right'}} onClick={handleBookmark}>
                  <BookmarkBorderOutlinedIcon fontSize="small" />
                </IconButton>}
                {like && <IconButton aria-label="like" style={{ color: '#009362', alignSelf: 'right'}} onClick={handleLike}>
                  <ThumbUpIcon fontSize="small" />
                </IconButton>}
                {!like && <IconButton aria-label="like" style={{ color: '#009362', alignSelf: 'right'}} onClick={handleLike}>
                  <ThumbUpOutlinedIcon fontSize="small" />
                </IconButton>}
              </CardActions>
            </Card>}
          </React.Fragment>}
      
      {props.article &&
      
      <Modal
        open={open}
        onClose={modalClose}
        onRequestClose={modalClose}
        style={{height: 'flex', display:'flex',alignItems:'center',justifyContent:'center'}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grow direction="up" in={open} mountOnEnter unmountOnExit>
        {body}
        </Grow>
      </Modal>
      }
    </div>
  );
}
