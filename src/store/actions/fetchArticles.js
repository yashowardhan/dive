export const FETCH_ARTICLES = "FETCH_ARTICLES";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchArticles = (xyz) => (dispatch) => {
  if (sessionStorage.getItem('userId')) {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/?userId=${sessionStorage.getItem('userId')}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES, payload: res.result }));
  } else {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES, payload: res.result }));
  }
};

export default fetchArticles;
