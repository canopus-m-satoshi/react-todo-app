import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          <li className="list-row">
            <p className="list-text">aaaaaa</p>
            <button className="list-btn">完了</button>
            <button className="list-btn">削除</button>
          </li>
          <li className="list-row">
            <p className="list-text">bbbbbbb</p>
            <button className="list-btn">完了</button>
            <button className="list-btn">削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のTODO</h2>
        <ul>
          <li className="list-row">
            <p className="list-text">ccccccc</p>
            <button className="list-btn">戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
