import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import MailIcon from '@material-ui/icons/Mail';
import FlikcIcon from '../../Flick.jpg';


const useStyles = makeStyles({
  root: {
    width: '100%',
    zIndex: 100,
    position: 'fixed',
    bottom: 0,
    borderTop: '1px solid',
  },
  bottomAction: {
      color: '#009362',
      '&$selected': {
        color: 'white',
        backgroundColor: '#009362'
      },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  selected: {}
});

export function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('feed');
  const [isMenuOpen, setMenu] = React.useState(false);

  const toggleDrawer = () => {
    if (isMenuOpen) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      role="presentation"
    >
      <div>
        <img src={FlikcIcon} height="150px" />
      </div>
      <Divider />
      <List>
        {['Profile', 'Topics', 'Recently Viewed', 'All tags', 'Subscribe To Our Newsletter', 'Share Flikc', 'Logout' ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <SwipeableDrawer
            open={isMenuOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
            {list('right')}
      </SwipeableDrawer>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Menu" value="recents" icon={<MenuIcon />} classes={{
          root: classes.bottomAction,
          selected: classes.selected,
      }} onClick={toggleDrawer} />
      <BottomNavigationAction label="Liked" value="favorites"  icon={<ThumbUpIcon />} classes={{
          root: classes.bottomAction,
          selected: classes.selected,
      }} component={Link} to={'/liked'}/>
      <BottomNavigationAction label="Feed" value="feed" icon={<DynamicFeedIcon />} classes={{
          root: classes.bottomAction,
          selected: classes.selected,
      }} component={Link} to={'/'}/>
      <BottomNavigationAction label="Bookmarks" value="folder" icon={<BookmarkIcon />} classes={{
          root: classes.bottomAction,
          selected: classes.selected,
      }} component={Link} to={'/bookmarks'}/>
    </BottomNavigation>
    </React.Fragment>
  );
}

export default withRouter(LabelBottomNavigation);
