import { useDispatch } from 'react-redux';

import { faker } from '@faker-js/faker/locale/fa';

import { postActions } from './slice';

export default function AddPost() {
  const dispatch = useDispatch();
  const handleAddPost = (e)=>{
    const newTitle  = faker.lorem.word();
    const newText = faker.lorem.text();
    
    dispatch(postActions.AddPost(newTitle,newText,23) )
  }
  return (
    <div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  )
}
