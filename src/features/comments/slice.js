import {
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

const initialState = {};
const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    AddComment: {
      reducer: (state, action) => {
        state[action.payload.id] = action.payload;
      },
      prepare: (title, text, viewsCount,newId) => {
        let myId = nanoid();
        if(newId)
        {
          myId = newId;
        }
        return {
          payload: {
            id: myId,
            title,
            text,
            viewsCount,
          },
        };
      },
    },
    DeleteComment: (state, action) => {
      delete state[action.payload];
    },
    UpdateComment: {
      reducer: (state, action) => {
        state[action.payload.id] = {...state[action.payload.id],...action.payload};
      },
      prepare: (id, newComment) => {
        return {payload:{ id, ...newComment }};
      },
    },
  },
});
export default commentSlice.reducer;
export const commentAction = commentSlice.actions;