import {
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

const initialState = {
    
}
const postSlice = createSlice({
    name:"posts",
    initialState:initialState,
    reducers:{
        AddPost: {
            reducer: (state, action) => {
              const {id} =action.payload;
              state[id]= action.payload;
            },
            prepare: (title, text, viewsCount) => {
              return {
                payload: {
                  id: nanoid(),
                  title,
                  text,
                  viewsCount,
                  Comments:[]
                },
              };
            },
          },
          DeletePost: (state, action) => {
            delete state[action.payload];
          },
          UpdatePost: {
            reducer: (state, action) => {
              state[action.payload.id] = { id: action.payload.id, ...action.payload };
            },
            prepare: (id, newPost) => {
              return { id, newPost };
            },
          },
          AddComment:{
            reducer:(state,action)=>{
                const {postId,commentId} = action.payload;
                state[postId].Comments.push(commentId);
            },
            prepare:(postId,commentId)=>{
                return {
                    payload:{postId,commentId}
                };
            }
          },
          DeleteComment:{
            reducer:(state,action)=>{
                const {postId,commentId} = action.payload;
                delete state[postId].Comments[state[postId].Comments.indexOf(commentId)];
                
            },
            prepare:(postId,commentId)=>{
                return {
                    payload:{postId,commentId}
                };
            }
          }
    }
})
export const postActions=  postSlice.actions;


export default postSlice.reducer;