import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/todointerfase';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}
      key={todo.id}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
