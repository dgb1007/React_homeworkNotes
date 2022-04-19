import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButtom } from "./CreateTodoButtom";
import Avatar from './Avatar';


const todos = [
  {id: '1', text: 'Preparar café', completed: "false"},
  {id: '2',text: 'Servir café', completed: "false"},
  {id: '3',text: 'Tomar café', completed: "false"}
];

function App() {
  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="row">
          <TodoCounter />
          <Avatar urlimage="https://lh3.googleusercontent.com/ogw/ADea4I5nq93BAj0RJ0NiNlg5f_TOyKK7rxT96mmuCoNKYw=s32-c-mo"/>
          <TodoSearch />
          <TodoList />
            {todos.map((todo) => {return <TodoItem ke={todo.id} text={todo.text} completed={todo.completed} />})}
          <CreateTodoButtom />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
