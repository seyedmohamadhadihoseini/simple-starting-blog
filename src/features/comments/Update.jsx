import { useDispatch } from 'react-redux';

import { faker } from '@faker-js/faker/locale/fa';

import { commentAction } from './slice';

export default function Update({ commentId }) {
    const dispatch = useDispatch();

  const handleUpdateComment = (e) => {
    const newComment={
        id:commentId,
        text:faker.lorem.text()
    } 
    dispatch(commentAction.UpdateComment(commentId, newComment));
  };
  return (
    <div>
      <button onClick={handleUpdateComment}>Update</button>
    </div>
  );
}
