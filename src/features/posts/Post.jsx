import AddComment from '../comments/AddComment';
import Comments from '../comments/Comments';

export default function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <article>{post.text}</article>
      <AddComment postId={post.id} />
      <Comments postId={post.id}/>
    </div>
  );
}
