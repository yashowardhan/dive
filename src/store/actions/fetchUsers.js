export const FETCH_USERS = "FETCH_USERS";

//Fetch call and we're using a function instaed of an object
//to set up our action. We're fetching data from API
// and returning the data to our payload.

const fetchUsers = (dispatch) => {
  fetch("https://e750daee-a709-46bf-b8c0-8d77077aee4e.mock.pstmn.io/post")
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_USERS, payload: res.result }));
};

export default fetchUsers;
