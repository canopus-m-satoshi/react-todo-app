import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="list-text">{todo}</p>
              <button
                onClick={() => onClickComplete(index)}
                className="list-btn"
              >
                完了
              </button>
              <button onClick={() => onClickDelete(index)} className="list-btn">
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
