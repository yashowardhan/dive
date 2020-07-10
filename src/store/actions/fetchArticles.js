export const FETCH_ARTICLES = "FETCH_ARTICLES";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const userId = sessionStorage.getItem('userId');

const fetchArticles = (dispatch) => {
  fetch(`https://xandar.pinnium.in/api/dive-in/articles/?userId=5eca75d8e79555001d4d36f7`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES, payload: res.result }));
};

export default fetchArticles;
