import { useDispatch } from 'react-redux';

import { faker } from '@faker-js/faker/locale/fa';
import { nanoid } from '@reduxjs/toolkit';

import { postActions } from '../posts/slice';
import { commentAction } from './slice';

export default function AddComment({postId}) {
  const dispatch = useDispatch();
  const AddCommentHandler = (e) => {
    const newTitle = faker.company.buzzNoun();
    const newText = faker.lorem.text();
    const viewsCount = faker.number.int();
    const newId = nanoid();
    dispatch(commentAction.AddComment(newTitle, newText, viewsCount,newId));
    dispatch(postActions.AddComment(postId,newId));
  };
  return <button onClick={AddCommentHandler}>Add Comment</button>;
}
