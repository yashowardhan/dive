export const FETCH_ARTICLES_TAGS = "FETCH_ARTICLES_TAGS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchArticles = (tag) => (dispatch) => {
    fetch(`https://xandar.pinnium.in/api/dive-in/articles/?tag=${tag}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES_TAGS, payload: res.result }));
};

const fetchArticlesBusiness = (dispatch) => {
  fetch(`https://xandar.pinnium.in/api/dive-in/articles/?categoryId=5f0afce1a4fcef001d87bd68`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES_TAGS, payload: res.result }));
}

const fetchArticlesProduct = (dispatch) => {
  fetch(`https://xandar.pinnium.in/api/dive-in/articles/?categoryId=5f0afc76a4fcef001d87bd67`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_ARTICLES_TAGS, payload: res.result }));
}

export default fetchArticles;