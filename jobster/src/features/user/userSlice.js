// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import customFetch from "../../utils/axios";
// import {
//   addUserLocalStorage,
//   getUserFromLocalStorage,
//   removeUserFromLocalStorage,
// } from "./../../utils/localStorage";

// const initialState = {
//   isLoading: false,
//   isSidebarOpen: false,
//   user: getUserFromLocalStorage(),
// };
// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (user, thunkAPI) => {
//     // console.log(`Register User:${JSON.stringify(user)}`);
//     try {
//       const resp = await customFetch.post("/auth/register", user);
//       // console.log(resp);
//       return resp.data;
//     } catch (error) {
//       //   toast.error(error.response.data.msg);
//       //   console.log(error.response);
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (user, thunkAPI) => {
//     // console.log(`Register User:${JSON.stringify(user)}`);
//     try {
//       const resp = await customFetch.post("/auth/login", user);
//       // console.log(resp);
//       return resp.data;
//     } catch (error) {
//       //   toast.error(error.response.data.msg);
//       //   console.log(error.response);
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );
// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async (user, thunkAPI) => {
//     try {
//       const resp = await customFetch.patch("/auth/updateUser", user, {
//         headers: {
//           authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
//           // authorization: `Bearer `,
//         },
//       });
//       return resp.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         thunkAPI.dispatch(loginUser());
//         return thunkAPI.rejectWithValue("Unauthorized ! Logging out...");
//       }
//       // console.log(error.response);
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     toggleSidebar: (state) => {
//       state.isSidebarOpen = !state.isSidebarOpen;
//     },
//     logoutUser: (state) => {
//       state.user = null;
//       state.isSidebarOpen = false;
//       removeUserFromLocalStorage();
//     },
//   },
//   extraReducers: {
//     [registerUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [registerUser.fulfilled]: (state, { payload }) => {
//       const { user } = payload;

//       state.isLoading = false;
//       state.user = user;
//       addUserLocalStorage(user);
//       toast.success(`Hello there ${user.name}`);
//     },
//     [registerUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       toast.error(payload);
//     },

//     [loginUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       const { user } = payload;

//       state.isLoading = false;
//       state.user = user;
//       addUserLocalStorage(user);

//       toast.success(`Welcome Back ${user.name}`);
//     },
//     [loginUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       toast.error(payload);
//     },
//     [updateUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [updateUser.fulfilled]: (state, { payload }) => {
//       const { user } = payload;

//       state.isLoading = false;
//       state.user = user;
//       addUserLocalStorage(user);

//       toast.success(`User updated!`);
//     },
//     [updateUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       toast.error(payload);
//     },
//   },
// });
// export const { toggleSidebar, logoutUser } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { clearStoreThunk } from "./userThunk";

import {
  addUserLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "./../../utils/localStorage";
import { loginUserThunk, registerUserThunk } from "./userThunk";
import { updateUserThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    // console.log(`Register User:${JSON.stringify(user)}`);
    // try {
    //   const resp = await customFetch.post("/auth/register", user);
    //   // console.log(resp);
    //   return resp.data;
    // } catch (error) {
    //   //   toast.error(error.response.data.msg);
    //   //   console.log(error.response);
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }

    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    // console.log(`Register User:${JSON.stringify(user)}`);
    // try {
    //   const resp = await customFetch.post("/auth/login", user);
    //   // console.log(resp);
    //   return resp.data;
    // } catch (error) {
    //   //   toast.error(error.response.data.msg);
    //   //   console.log(error.response);
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }

    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    // try {
    //   const resp = await customFetch.patch("/auth/updateUser", user, {
    //     headers: {
    //       authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    //       // authorization: `Bearer `,
    //     },
    //   });
    //   return resp.data;
    // } catch (error) {
    //   if (error.response.status === 401) {
    //     thunkAPI.dispatch(loginUser());
    //     return thunkAPI.rejectWithValue("Unauthorized ! Logging out...");
    //   }
    //   // console.log(error.response);
    //   return thunkAPI.rejectWithValue(error.response.data.msg);
    // }
    return updateUserThunk("/auth/updateUser", user, thunkAPI);
  }
);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;

      state.isLoading = false;
      state.user = user;
      addUserLocalStorage(user);
      toast.success(`Hello there ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;

      state.isLoading = false;
      state.user = user;
      addUserLocalStorage(user);

      toast.success(`Welcome Back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;

      state.isLoading = false;
      state.user = user;
      addUserLocalStorage(user);

      toast.success(`User updated!`);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [clearStore.rejected]: () => {
      toast.error("there was an error");
    },
  },
});
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
