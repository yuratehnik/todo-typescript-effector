import React from "react";

export interface IProps {
    children?:
        | JSX.Element
        | JSX.Element[]
        | string
        | string[];
}

export interface ITodoItem {
    id: number,
    isChecked: boolean,
    text: string
}

export type ContextValue = {
    Provider: React.Provider<any>,
    Consumer: React.Consumer<any>
} | null;

export interface IReduxAction {
    type: string;
    payload: any;
}

export type checkedPayloadType = {
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
}