import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import fetchLikedArticles from "../../store/actions/fetchLikedArticles";
import Popup from "../common/Popup";
import { Grid, GridList, Divider } from "@material-ui/core";
import FlikcIcon from '../../Flick.jpg';


const CustomTextTypography = withStyles({
  root: {
    color: "#009362",
  }
})(Typography);

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

function MediaCardLiked(props) {
  const classes = useStyles();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchLikedArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.articles, "articles working cool");
  const { articles } = props;
  //console.log(users, "data in props");
  return (
    <div>
    <Header/>

    {!sessionStorage.getItem('userId') && <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: '125px' }}
    >
      <img src={FlikcIcon} height="150px" />
      <CustomTextTypography> Please Sign in to like articles. </CustomTextTypography>
    </Grid>
    }
    {sessionStorage.getItem('userId') && articles.length===0 && <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: '125px' }}
    >
      <img src={FlikcIcon} height="150px" />
      <CustomTextTypography> Wow! You didn't like anything yet ? </CustomTextTypography>
    </Grid>
    }
    
    {sessionStorage.getItem('userId') && <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    <div className="parent-card">
      {articles.map((article) => (
        <div className="card-box">
          <Popup article={article} isLiked={true}></Popup>
        </div>
      ))}
    </div>
    </Grid>}
    </div>
  );
}

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
    articles: state.likedArticles,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    updatePosts: () => dispatch(updatePosts),
    fetchUsers: () => dispatch(fetchUsers),
    fetchLikedArticles: () => dispatch(fetchLikedArticles),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MediaCardLiked);
