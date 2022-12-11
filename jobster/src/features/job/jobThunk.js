import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobSlice";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearValues } from "./jobSlice";
// import { logoutUser } from "../user/userSlice";
// import authHeader from "./../../utils/authHeader";

// const authHeader = (thunkAPI) => {
//   return {
//     headers: {
//       authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//     },
//   };
// };

export const crateJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post(
      "/jobs",
      job
      //   authHeader(thunkAPI)
      //       {
      //   headers: {
      //     authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      //   },
      // }
    );
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);

    //   if (error.response.status === 401) {
    //     thunkAPI.dispatch(logoutUser());
    //     return thunkAPI.rejectWithValue("Unauthorized ! Logging out ...");
    //   }
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  // console.log(jobId);
  try {
    const resp = await customFetch.delete(
      `/jobs/${jobId}`
      //       , {
      //   headers: {
      //     authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      //   },
      //       }
    );
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    // return thunkAPI.rejectWithValue(error.response.data.msg);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(
      `/jobs/${jobId}`,
      job
      //       {
      //   headers: {
      //     authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      //   },
      //       }
    );
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue(error.response.data.msg);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
