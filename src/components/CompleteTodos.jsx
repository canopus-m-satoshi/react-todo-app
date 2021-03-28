import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <h2 className="title">完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="list-text">{todo}</p>
              <button onClick={() => onClickBack(index)} className="list-btn">
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
