export const FETCH_BOOKMARKED_ARTICLES = "FETCH_BOOKMARKED_ARTICLES";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchBookmarkedArticles = (dispatch) => {
  console.log('xxxxxxxxxxx');
  if (sessionStorage.getItem('userId')) {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/bookmarked?userId=${sessionStorage.getItem('userId')}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_BOOKMARKED_ARTICLES, payload: res.result }));
  } else {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/bookmarked/`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_BOOKMARKED_ARTICLES, payload: res.result }));
  }
};

export default fetchBookmarkedArticles;
