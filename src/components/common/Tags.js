// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import fetchTopics from "../../store/actions/fetchTopics";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import ListItemText from "@material-ui/core/ListItemText";
// import Select from "@material-ui/core/Select";
// import Checkbox from "@material-ui/core/Checkbox";
// import Chip from "@material-ui/core/Chip";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 300,
//   },
//   chips: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   chip: {
//     margin: 2,
//   },
//   noLabel: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// function Tags(props) {
//   useEffect(() => {
//     // Update the document title using the browser API
//     props.fetchTopics();
//   }, []);
//   console.log(props.topics, "articles working cool");
//   const { topics } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     setPersonName(event.target.value);
//   };

//   const handleChangeMultiple = (event) => {
//     const { options } = event.target;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setPersonName(value);
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel shrink htmlFor="select-multiple-native">
//           Select Tags
//         </InputLabel>
//         <Select
//           multiple
//           native
//           value={personName}
//           onChange={handleChangeMultiple}
//           inputProps={{                                        
//             id: "select-multiple-native",
//           }}
//         >
//           {topics.map((topic) => (
//             <option key={topic.name} value={topic.name}>
//               {topic.name}
//             </option>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

// const MapStateToProps = (state) => {
//   return {
//     topics: state.topics,
//   };
// };

// // Setup Dispatch for our button events.
// const MapDispatchToProps = (dispatch) => {
//   return {
//     fetchTopics: () => dispatch(fetchTopics),
//   };
// };

// export default connect(MapStateToProps, MapDispatchToProps)(Tags);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTopics from "../../store/actions/fetchTopics";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Tags(props) {
  const classes = useStyles();

  useEffect(() => {
    // Update the document title using the browser API
    props.fetchTopics();
  }, [props]);
  console.log(props.topics, "topics rendering");
  const { topics } = props;

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        label="Select Topics"
        //onDelete={handleDelete}
        style={{ marginTop: "2rem" }}
        color="secondary"
      />
      {topics.map((topic) => {
        return (
          <Chip
            label={topic.name}
            clickable
            color="primary"
            //onDelete={handleDelete}
            style={{ marginTop: "2rem" }}
          />
        );
      })}
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    topics: state.topics,
  };
};

// Setup Dispatch for our button events.
const MapDispatchToProps = (dispatch) => {
  return {
    fetchTopics: () => dispatch(fetchTopics),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Tags);
