import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#E98074'
  },
  media: {
    height: 200,
  },
});

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
    <div className="parent-card">
      {articles.map((article) => (
        <div className="card-box">
          <React.Fragment>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={article.imageUrl}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{ color: "#314455", fontStyle: 'bold' }}>
                    {article.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#373546", fontStyle: 'bold' }}
                  >
                    {article.author}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    style={{ color: "#373546" }}
                  >
                    {article.timeToRead} min read.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {article.description}
                  </Typography>
                  <Popup url={article.url}></Popup>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="like">
                  <ThumbUpIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="dislike">
                  <ThumbDownAltIcon></ThumbDownAltIcon>
                </IconButton>
                <Button size="small" color="primary" onClick={props.fetchUsers}>
                  Read time: {article.timeToRead}
                </Button>
              </CardActions> */}
            </Card>
          </React.Fragment>
        </div>
      ))}
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
    fetchArticles: () => dispatch(fetchArticles),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MediaCard);
