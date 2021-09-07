import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    totalCount: 0,
    entities: [
      { id: 1, title: "rizwan", experience: "blah blah" },
      { id: 2, title: "rizwan", experience: "blah blah" },
      { id: 3, title: "rizwan", experience: "blah blah" },
      { id: 4, title: "rizwan", experience: "blah blah" },
    ],
  },
  reducers: {
    addJob: (state, action) => {
      state.entities.push(action.payload);
    },
    editJob: (state, action) => {
      let job = action.payload;
      state.entities.map((item, index) => {
        if (item.id === job.id) {
          state.entities[index] = job;
        }
      });
    },
    jobList: (state) => {
      return state.entities;
    },
    removeJob: (state, action) => {
      console.log(
        "delete",
        state.entities.filter(job => job.id !== action.payload)
      );
      state = {
        ...state,
        entities: state.entities.filter((job) => job.id !== action.payload),
      };
      return state;
    },
    searchJob: (state, action) => {
      state.entities["title"].find(action.payload);
      return state.entities["title"];
    },
  },
});

export const { addJob, editJob, jobList, removeJob, searchJob } =
  jobsSlice.actions;

export default jobsSlice.reducer;
