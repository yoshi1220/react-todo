import React from "react";

export const CompleteTodos = (props) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {props.completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => props.onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
