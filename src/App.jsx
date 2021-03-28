import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbbb"]);

  const [completeTodos, setCompleteTodos] = useState(["cccccccccccc"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p className="list-text">{todo}</p>
                <button className="list-btn">完了</button>
                <button className="list-btn">削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のTODO</h2>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p className="list-text">{todo}</p>
                <button className="list-btn">戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
