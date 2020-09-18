import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Header from "../common/Header";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { connect } from "react-redux";
import updatePosts from "../../store/actions/updatePosts";
import fetchUsers from "../../store/actions/fetchUsers";
import fetchArticles from "../../store/actions/fetchArticles";
import Popup from "../common/Popup";
import { Grid, GridList, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#FFFFFF'
  },
  media: {
    height: 200,
    width: 345,
  },
  topic: {
    margin: theme.spacing(1, 1, 1),
    backgroundColor: "#FFFFFF",
    borderColor: '#009362',
    color: "#009362",
    '&:hover': {
      backgroundColor: '#009362',
      color: '#FFFFFF'
    },
    fontSize: '12px',
    padding: '3px 3px'
  },
  selectedTopic: {
    margin: theme.spacing(1, 1, 1),
    backgroundColor: "#009362",
    borderColor: '#009362',
    color: "#FFFFFF",
    '&:hover': {
      backgroundColor: '#009362',
      color: '#FFFFFF'
    },
    fontSize: '12px',
    padding: '3px 3px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.02)'

  }
}));

function MediaCard(props) {
  const classes = useStyles();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.articles, "articles working cool");
  const { articles } = props;
  //console.log(users, "data in props");
  return (
    <div>
    {/* <Header/> */}
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      overflow="auto"
      style={{ overflowX: 'auto', marginTop: '10px'}}
    >
    {/* {<Button
            type="submit"
            href="/feed"
            width="50%"
            border="1px"
            variant="outlined"
            // color="#009362"
            //justifyContent="center"
            className={classes.selectedTopic}
          >
            All
    </Button>}
    {<Button
            type="submit"
            href="/feed/product"
            width="50%"
            border="1px"
            variant="outlined"
            // color="#009362"
            //justifyContent="center"
            className={classes.topic}
          >
            Product
    </Button>}
    {<Button
            type="submit"
            href="/feed/business-and-strategy"
            width="50%"
            border="1px"
            variant="outlined"
            // color="#009362"
            //justifyContent="center"
            className={classes.topic}
          >
            Business and Strategy
    </Button>} */}
    </Grid>
    {/* <Divider /> */}
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: '50px' }}
    >
    <div className="parent-card">
      {
        articles.map((article) => {
          return (
            <div className="card-box">
              <Popup article={article} ></Popup>
            </div>
          )})
      }
    </div>
    </Grid>
    </div>
  );
}

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
    articles: state.articles,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    updatePosts: () => dispatch(updatePosts),
    fetchUsers: () => dispatch(fetchUsers),
    fetchArticles: (y) => dispatch(fetchArticles(y)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MediaCard);
