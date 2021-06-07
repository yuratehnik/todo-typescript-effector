import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import {FilterProvider} from "./context/filterContext";

const App: React.FC = () => {

  return (
    <div className="App">
      <TodoInput/>
      <FilterProvider>
          <TodoFilter/>
          <TodoList/>
      </FilterProvider>
    </div>
  );
}

export default App;
