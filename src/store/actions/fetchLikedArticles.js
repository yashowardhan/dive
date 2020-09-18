export const FETCH_LIKED_ARTICLES = "FETCH_LIKED_ARTICLES";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchLikedArticles = (dispatch) => {
  if (sessionStorage.getItem('userId')) {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/liked?userId=${sessionStorage.getItem('userId')}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_LIKED_ARTICLES, payload: res.result }));
  } else {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/liked/`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_LIKED_ARTICLES, payload: res.result }));
  }
};

export default fetchLikedArticles;
