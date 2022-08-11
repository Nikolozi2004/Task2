import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList"



function App() {
  return (
    <TodoList>
      <Todo title="hello world" isDone={false}/>
      <Todo title="learn node" isDone={true}/>
      <Todo title="Cry because as a developer i don't have a life" isDone={true}/>
    </TodoList>
  );
}

export default App;
