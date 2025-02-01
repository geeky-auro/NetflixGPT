import { createSlice } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

const initialState: User | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: any, action: any) => {
      if (!state) return action.payload;
      state.push(action.payload);
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
