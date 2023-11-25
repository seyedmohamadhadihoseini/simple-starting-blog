import commentsReducer from "./features/comments/slice";
import postsReducer from "./features/posts/slice";

const reducer ={
    posts:postsReducer,
    comments:commentsReducer
}
export default reducer;