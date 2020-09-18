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
import fetchBookmarkedArticles from "../../store/actions/fetchBookmarkedArticles";
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
    padding: '3px 3px'
  }
}));

function MediaCardBookmarked(props) {
  const classes = useStyles();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('xyz')
    // Update the document title using the browser API
    props.fetchBookmarkedArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.articles, "articles working cool");
  const { articles } = props;
  //console.log(users, "data in props");
  return (
    <div>
    <Header/>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      overflow="auto"
      style={{ overflowX: 'auto'}}
    >
      {<Button
            type="submit"
            href="/feed"
            width="50%"
            border="1px"
            variant="outlined"
            color="#009362"
            justifyContent="center"
            className={classes.topic}
          >
            All
    </Button>}
    {<Button
            type="submit"
            href="/feed/product"
            width="50%"
            border="1px"
            variant="outlined"
            color="#009362"
            justifyContent="center"
            className={classes.selectedTopic}
          >
            Product
    </Button>}
    {<Button
            type="submit"
            href="/feed/business-and-strategy"
            width="50%"
            border="1px"
            variant="outlined"
            color="#009362"
            justifyContent="center"
            className={classes.topic}
          >
            Business and Strategy
    </Button>}
    </Grid>
    <Divider />
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    <div className="parent-card">
      {articles.map((article) => (
        <div className="card-box">
          <Popup article={article} isBookmarked={true}></Popup>
        </div>
      ))}
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
    fetchBookmarkedArticles: () => dispatch(fetchBookmarkedArticles),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MediaCardBookmarked);
