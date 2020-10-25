import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Header from "../common/Header";
import Fab from '@material-ui/core/Fab';
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
import fetchTags from "../../store/actions/fetchTags";
import fetchPopularTags from "../../store/actions/fetchPopularTags";
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
  },
  chip: {
    border: '1px solid',
    borderColor: '#009362',
    color: '#009362',
    borderRadius: '5px',
    backgroundColor:'#FFFFFF',
    marginRight: '5px',
    marginBottom: '8px',
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
    marginBottom: '8px',
    fontSize: '14px',
    height: '30px',
    textTransform: 'unset',
    padding: '0px 10px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.14), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.02)'
  },
}));

function AllTags(props) {
  const classes = useStyles();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchPopularTags();
    props.fetchTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { tags, popularTags } = props;

  const goToFeedPage = (tag, event) => {
    // history.replace({ pathname: `/tags/${tag}/123`})
    window.location = `/feed`;
    event.stopPropagation();
  }

  const goToTagPage = (tag, event) => {
    // history.replace({ pathname: `/tags/${tag}/123`})
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/analytics`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: sessionStorage.getItem('userId'), analyticType: 'SELECT_TAG', tag  }),
    }).then(() => {
      window.location = `/tags/${tag}`;
    });
    event.stopPropagation();
  }
  //console.log(users, "data in props");
  return (
    <div style={{marginBottom: '56px'}}>
    <Header/>
    <Divider />
    <Grid
      container
      direction="row"
      justify="left"
      alignItems="left"
      style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}
    >
        <Typography style={{ fontStyle: 'bold', }}>{`Select a topic to dive in or `} </Typography>
        <Typography style={{ marginLeft: '3px', color: '#009362',fontFamily: 'monospace', fontWeight: 600, fontSize: '1.25rem', textDecoration: 'underline' }} onClick={goToFeedPage}>Explore</Typography>
    </Grid>
    <Divider />
    <Typography 
        style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', fontFamily: 'monospace', fontWeight: 'bolder', fontSize: '1.25rem', textDecoration: 'underline'}}
    >
        Popular Tags: 
    </Typography>
    <Grid
      container
      direction="row"
      justify="left"
      alignItems="left"
      style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}
    >
        { popularTags.map((tag) => {
            return (
                <Fab
                    value={tag.name} clickable variant="outlined" className={classes.chip} elevation={3}  onClick={(e) => goToTagPage(tag.name,e)}
                >{tag.name}
                </Fab>
            )
        })}
    </Grid>
    <Divider />
    {tags.map((item) => {
      if (item.categoryName !== 'Other') {
        return (
          <div>
            <Typography 
              style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', fontFamily: 'monospace', fontWeight: 'bolder', fontSize: '1.25rem', textDecoration: 'underline'}}
            >
                {item.categoryName}
            </Typography>
            <Grid
              container
              direction="row"
              justify="left"
              alignItems="left"
              style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}
            >
                { item.categoryTags.map((tag) => {
                    return (
                        <Fab
                            value={tag.name} clickable variant="outlined" className={classes.chip} elevation={3}  onClick={(e) => goToTagPage(tag.name,e)}
                        >{tag.name}
                        </Fab>
                    )
                })}
            </Grid>
            <Divider />
          </div>
        )
      } else {
        return null;
      }
    })}
    </div>
  );
}

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
    tags: state.tags,
    popularTags: state.popularTags,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    updatePosts: () => dispatch(updatePosts),
    fetchUsers: () => dispatch(fetchUsers),
    fetchTags: (y) => dispatch(fetchTags),
    fetchPopularTags: () => dispatch(fetchPopularTags),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(AllTags);
