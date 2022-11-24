import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ important, done,
      label, onToggleImportant, onToggleDone, onDelete }) => {

        let classNames = 'todo-item__text';
        if (done) {
          classNames += ' todo-item__text--ready';
        }
    
        if (important) {
          classNames += ' todo-item__text--imp';
        }


  return (
    <>
      <span className={classNames} onClick={onToggleDone}>{label}</span>
      <div>
        <button type="button" className="todo-item__button todo-item__button--important" onClick={onToggleImportant}></button>
        <button type="button" className="todo-item__button todo-item__button--dell" onClick={onDelete}></button>
      </div>
    </>
  );
};

export default TodoListItem;
