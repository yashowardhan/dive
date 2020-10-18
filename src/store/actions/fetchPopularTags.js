export const FETCH_POPULAR_TAGS = "FETCH_POPULAR_TAGS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchTags = (dispatch) => {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/tags?isPopular=true`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_POPULAR_TAGS, payload: res.result }));
};

export default fetchTags;
