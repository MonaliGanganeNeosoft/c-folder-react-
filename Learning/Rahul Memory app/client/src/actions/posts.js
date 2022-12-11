import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
  //   const action = { type: "FETCH_ALL", payload: [] };
  //   dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data, "hii");
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
