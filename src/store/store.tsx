import React from "react";
import {createEvent, createStore} from "effector"
import {ITodoItem, checkedPayloadType} from "../types/types";
import {addTodo, handleCheckedTodo, removeTodo} from "./effector-events";

const todoStore = createStore<Array<ITodoItem>>([])
const addTodoEvent = createEvent<string>();
const removeTodoEvent = createEvent<number>();
const handleCheckedTodoEvent = createEvent<checkedPayloadType>();

todoStore
    .on(addTodoEvent, addTodo)
    .on(removeTodoEvent, removeTodo)
    .on(handleCheckedTodoEvent, handleCheckedTodo)

export {todoStore, addTodoEvent, removeTodoEvent, handleCheckedTodoEvent}