import React from "react";
import {checkedPayloadType, ITodoItem} from "../types/types";

export const addTodo = (state: ITodoItem[], payload: string) => {
    const newItem: ITodoItem = {
        text: payload,

        isChecked: false,
        id: new Date().getTime()
    }

    return [...state, newItem]
}

export const removeTodo = (state: ITodoItem[], payload: number) => {
    let newArrayForRemove = [...state.map(item => {return {...item}})];
    const itemIndex = newArrayForRemove.findIndex((item) => item.id === payload)
    newArrayForRemove.splice(itemIndex, 1);

    return [...newArrayForRemove]
}

export const handleCheckedTodo = (state: ITodoItem[], payload: checkedPayloadType ) => {
    const newCheckedStatus = payload.event.target.checked;
    const newArrayForHandleChecked = [...state.map((item: ITodoItem)=>{
        let newItem = {...item}
        if(newItem.id === payload.id) {
            newItem.isChecked = newCheckedStatus;
        }
        return newItem;
    })]

    return [...newArrayForHandleChecked]
}