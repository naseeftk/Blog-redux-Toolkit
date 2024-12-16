import { createSlice } from "@reduxjs/toolkit";

const blogslice = createSlice({
    name: "blog",
    initialState: { blogs: [], color: "" },
    reducers: {
      save: (state, action) => {
        const id = Date.now();
        state.blogs.push({
          id,
         text: action.payload.title,
          body: action.payload.detail,
        });
        state.color = action.payload.color;
      },
    },
  });
  
  export const { save } = blogslice.actions;
  export default blogslice.reducer;
  