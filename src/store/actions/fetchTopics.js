export const FETCH_TOPICS = "FETCH_TOPICS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchTopics = (dispatch) => {
  fetch(
    "https://xandar.pinnium.in/api/dive-in/categories/?userId=5eca2e597ca03a001d1ef510"
  )
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_TOPICS, payload: res.result }));
};

export default fetchTopics;
