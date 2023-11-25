import { useSelector } from 'react-redux';

import AddPost from './AddPost';
import Post from './Post';

export default function Posts() {
  const posts = Object.values(useSelector(state =>state.posts)).map(post=>{
    return <Post post={post} key={post.id}/>
  });  
  return (
    <div>
      <AddPost/>
      {posts}
      
    </div>
  )
}
