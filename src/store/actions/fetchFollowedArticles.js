export const FETCH_FOLLOWED_ARTICLES = "FETCH_FOLLOWED_ARTICLES";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchFollowedArticles = (dispatch) => {
  if (sessionStorage.getItem('userId')) {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/followed?userId=${sessionStorage.getItem('userId')}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_FOLLOWED_ARTICLES, payload: res.result }));
  } else {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/followed/`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_FOLLOWED_ARTICLES, payload: res.result }));
  }
};

export default fetchFollowedArticles;
