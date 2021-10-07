import {createSlice} from '@reduxjs/toolkit';

const iniState = {
  userId: null,
  login: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: iniState,
  reducers: {
    updateUserProfile: (state, {payload}) => {
      return {
        ...state,
        userId: payload.userId,
        login: payload.login,
      };
    },
    authStateChange: (state, {payload}) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => iniState,
  },
});
