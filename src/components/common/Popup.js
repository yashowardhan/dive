import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';  
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Header from "../common/Header";
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
      margin:'auto',
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
    height: "auto",
    // maxHeight: '90%',
    display: 'block',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(0 , 0, 1),
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
    borderColor: '#009362',
    color: '#009362',
    backgroundColor:'#FFFFFF',
    marginRight: '2px',
    marginBottom: '5px',
  },
  chipSelected: {
    borderColor: '#009362',
    color: '#FFFFFF',
    backgroundColor:'#009362',
    marginRight: '2px',
    marginBottom: '5px',
  },
  focusHighlight: {}
}));

export default function Popup(props) {
  const classes = useStyles();
  const userId = sessionStorage.getItem('userId');
  let history = useHistory();
  let location = useLocation();
  const { article, isBookmarked, isLiked, isTag, selectedTag } = props;
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
    if (bookmark === true) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  }

  const handleLike = () => {
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
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
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), articleId  }),
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
      setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };
  const goToTagPage = (tag) => {
    history.push({ pathname: `/tags/${tag}`})
  }
  const goToAuthorPage = (event) => {
    window.open(article.authorUrl);
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
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#807e7e", fontStyle: 'bold', alignSelf: 'left' }}
                  >
                    {article.author}
                  </Typography> */}
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
      <React.Fragment>
            {props.article && <Card className={classes.root}>
              <CardActionArea  classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight
        }} >
                <CardMedia
                  className={classes.media}
                  image={props.article.imageUrl || "https://res.cloudinary.com/dnfytuibw/image/upload/v1594554749/Product/1_6ge3gXH51icSvin7oV-4-Q_ziduln.png"}
                  title="Contemplative Reptile"
                />
                <CardContent style={{ padding: '0px'}}>
                  <Typography gutterBottom variant="h5" onClick={modalOpen} component="h2" style={{ color: "#1A1A1A", fontStyle: 'bold', marginLeft: '10px' }}>
                    {article.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#2b2b2b", fontStyle: 'bold', marginLeft: '10px' }}
                    onClick={goToAuthorPage}
                  >
                    {article.author}
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
          const hrefTag = `/tags/${tag}`;
          return (
            <Chip
        label={tag} href={hrefTag} value={tag} clickable variant="outlined" size="small" className={classes.chip} onClick={() => goToTagPage(tag)}
          />
          );
        }
      })}
      {isTag && article.tags && article.tags.map((tag) => {
        if (tag === selectedTag && tag !== "") {
          return (
          <Chip
      label={tag} href="#chip" clickable variant="outlined" size="small" className={classes.chipSelected}
        />);} else {
          if (tag !== "") {
            return (
              <Chip
          label={tag} href="#chip" clickable variant="outlined" size="small" className={classes.chip} 
            />);
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
          </React.Fragment>
      {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOpen}
          >
            Read More..
      </Button> */}
      {props.article && <Modal
        open={open}
        onClose={modalClose}
        style={{height: 'flex', display:'flex',alignItems:'center',justifyContent:'center'}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
        {body}
      </Modal>}
    </div>
  );
}
