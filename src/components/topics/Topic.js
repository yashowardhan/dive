/* eslint-disable no-unused-expressions */
import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Row, Label, Input, Container, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  useHistory,
  useLocation
} from "react-router-dom";
import './topic-selection-page.css';
import axios from 'axios';
import * as _ from 'lodash';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#DDEDE7"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#456E5E",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: "red",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#456E5E",
      color: "DDEDE7",
      '&:hover': {
        backgroundColor: '#456E5E',
      },
    input: {
      color: '#456E5E',
      }
    },
  }));
export default function Topic() {
    const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/feed" } };
  const userId = sessionStorage.getItem('userId');
  const [allTopics, updateAllTopics] = useState([]);
  const [selectedTopics, updateSelectedTopics] = useReducer(
    (selectedTopics, { type, payload }) => {
      switch (type) {
        case "add":
          return [...selectedTopics, payload.topic];
        case "remove":
          return _.filter(selectedTopics, (selectedTopic) => selectedTopic._id !== payload.topic._id);
        case "set_to":
          return payload.topics
        default:
          return selectedTopics;
      }
    }, []);
  // const [newSelectedTopics, updateNewSelectedTopics] = useState([])
  useEffect(() => {
    const getTopics = async () => {
        try {
            const response = await axios.get
              (`https://xandar.pinnium.in/api/dive-in/categories?userId=${userId}`);
            console.log(response);
            if (response.data.success) {
              //debugger
              const topics = response.data.result;
              const userSelectedTopics = []
              updateAllTopics(topics);
              _.forEach(topics, topic => {
                if (topic.isSelected) userSelectedTopics.push(topic);
              });
              updateSelectedTopics({
                type: "set_to",
                payload: {
                  topics: userSelectedTopics
                }
              });
            }
          } catch (error) {
            console.error(error);
          }
    };
  getTopics();
}, [userId]);

  const saveSelectedTopics = () => {
    const userId = sessionStorage.getItem('userId');
    const categoryIds = _.map((selectedTopics), topic => topic._id)
    if (categoryIds.length < 1) {
        toast.error("Please select atleast one topic.");
    } else {
        axios({
            method: 'post',
            url: 'https://xandar.pinnium.in/api/dive-in/categories/set',
            data: {
              userId,
              categoryIds
            }
          }).then((resp) => {
            if (resp.data.success) {
                history.replace(from);
            } else {
                toast.error("Something went wrong. Try Again!");
            }
          }).catch((ex) => {
      
          });
    }
  }

  const addSelectedTopic = (topic) => {
    //debugger;
    // const newlySelectedTopics = [...selectedTopics];
    // newlySelectedTopics.push(topic);
    updateSelectedTopics({
      type: "add",
      payload: {
        topic: topic
      }
    });
  }
  const removeSelectedTopic = (topic) => {
    //debugger;
    // const newlySelectedTopics = [...selectedTopics];
    // _.remove(newlySelectedTopics, (selectedTopic) => selectedTopic.id === topic.id);
    updateSelectedTopics({
      type: "remove",
      payload: {
        topic: topic
      }
    });
  }
  console.log(selectedTopics);
  console.log(allTopics);
  return (
    <Fragment>
      <div className='body'>
        <div className='logo'></div>
        <div className='body'>
          <div className='topic-selection-body'>
            <Container>
              <h4>Dive In!</h4>
              <h5>Start Learning Right Away</h5>
              <br />
              <h5>Select Topics</h5>
              {_.map(allTopics, (topic) => {
                return (
                  <Row>
                    <Col className='topic-wrapper' xs={12}>
                      {
                        (_.find(selectedTopics, (selectedTopic) => (selectedTopic._id === topic._id)) !== undefined)?
                          (
                            <div className='selected-topic' onClick={() => removeSelectedTopic(topic)}>
                              <p>
                                {topic.name}
                              </p>
                            </div>
                          ) :
                          (
                            <div className='topic' onClick={() => addSelectedTopic(topic)}>
                              <p>
                                {topic.name}
                              </p>
                            </div>
                          )
                      }
                    </Col>
                  </Row>)
              })}
              <Row>
                <Col xs={12}>
                  <button className='btn btn-success next-btn' onClick={() => saveSelectedTopics()}>Next</button>
                </Col>
              </Row>
            </Container>

          </div>
          <ToastContainer draggable={false} transition={Bounce} autoClose={3000} />
        </div>
      </div >
    </Fragment >

  )


}