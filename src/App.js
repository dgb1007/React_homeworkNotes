import React, { useState } from "react";
import data from "./data.json";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButtom } from "./CreateTodoButtom";
import Avatar from './Avatar';

const defaultTodos = [
  {id: '1', text: 'Preparar café', completed: false},
  {id: '2',text: 'Servir café', completed: true},
  {id: '3',text: 'Tomar café', completed: true}
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  //Know how many 'todos' are completed
  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  
  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="row">
          <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
          />
          <Avatar urlimage={data.avatar}/>
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList />
            {searchedTodos.map((item) => {
              return <TodoItem 
                key={item.id} 
                text={item.text} 
                completed={item.completed}  />
            })}
          <CreateTodoButtom />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
