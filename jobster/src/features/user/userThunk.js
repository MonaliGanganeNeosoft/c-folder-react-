import customFetch from "../../utils/axios";
import { clearAllJobsState } from "../allJobs/allJobSlice";
import { logoutUser } from "./userSlice";
import { loginUser } from "./userSlice";
import { clearValues } from "../job/jobSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    // console.log(resp);
    return resp.data;
  } catch (error) {
    //   toast.error(error.response.data.msg);
    //   console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    // console.log(resp);
    return resp.data;
  } catch (error) {
    //   toast.error(error.response.data.msg);
    //   console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(
      url,
      user
      // {
      // headers: {
      //   authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      //   // authorization: `Bearer `,
      // },
      // }
    );
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(loginUser());
      return thunkAPI.rejectWithValue("Unauthorized ! Logging out...");
    }
    // console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
