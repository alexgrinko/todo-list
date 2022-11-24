import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div>
      <h1>Список дел</h1>
      <p>осталось {toDo}, выполнил {done}</p>
    </div>
  );
};

export default AppHeader;
