import { createSlice } from "@reduxjs/toolkit";

const personsReducer = createSlice({
  name: "personReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: crypto.randomUUID(), ...action.payload });
    },
  },
});

export const { add } = personsReducer.actions;
export default personsReducer.reducer;
