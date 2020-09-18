import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../card/Card';
import MediaCardFollowed from '../card/FollowedCard';


import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log("chiledren", children);
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  box: {
      padding: '0px',
  },
  header: {
      boxShadow: 'none',
      position: 'fixed',
      top: 0,
      zIndex: 100,
  },
  customTabRoot: {
    color: "#009362",
    backgroundColor: "#FFF"
    },
    customTabIndicator: {
        backgroundColor: "#009362"
    }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" className={classes.header}>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.customTabRoot,
            indicator: classes.customTabIndicator
          }}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Explore" {...a11yProps(0)} />
          <Tab label="Followed" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Divider />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MediaCard />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <MediaCardFollowed />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
