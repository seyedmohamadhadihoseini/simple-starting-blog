import { useSelector } from 'react-redux';

import Update from './Update';

export default function Comment({ commentId }) {
  const comment = useSelector((state) => state.comments)[commentId];
  return (
    <div>
      <h3>{comment.title}</h3>
      <p>{comment.text}</p>
      <Update commentId={commentId}/>
    </div>
  );
}
