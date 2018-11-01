import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item">
          <span
            key={todo.id}
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p>You have no todo's left, yay!</p>
  );

  return <div className="collection todos">{todoList}</div>;
};

export default Todos;