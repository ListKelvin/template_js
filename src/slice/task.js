import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: null,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    clearTask: (state) => {
      state.task = null;
    },
  },
});

export const { setTask, clearTask } = taskSlice.actions;
export default taskSlice.reducer;
