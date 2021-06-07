import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {ITodoItem} from "../../types/types";
import {Container, List} from "@material-ui/core";
import {todoStore} from "../../store/store"
import {useFilter} from "../../context/filterContext";
import {FILTER_ALL} from "../../context/filterStates";
import TodoListItem from "../TodoListItem/TodoListItem";
import {filterTodoList} from "../../helpers/filterTodoList";
import {Pagination} from "@material-ui/lab";
import {useStore} from "effector-react";
const cloneDeep = require('lodash.clonedeep');



const TodoList: React.FC = () => {
    const [currentFilter, setCurrentFilter] = useState<string>(FILTER_ALL)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {filter} = useFilter();
    const todos = useStore(todoStore)
    const itemsOffset = 10;

    useEffect(()=>{
        setCurrentFilter(filter);
        setCurrentPage(1);
    }, [filter])

    const handlePagination = (event : ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
    }

    const memoizedFilteredItems = useMemo(()=> {
        return filterTodoList(todos, currentFilter).reverse();
    }, [todos, currentFilter]);

    const filteredItemsCopy = cloneDeep(memoizedFilteredItems);
    const pageOfFilteredItems = filteredItemsCopy.splice((currentPage - 1) * itemsOffset, itemsOffset);

    if(pageOfFilteredItems.length < 1 && currentPage > 1) {
        setCurrentPage((page)=>{
            return page - 1;
        })
    }

    const listOfComponents: JSX.Element[] | JSX.Element = pageOfFilteredItems.length > 0 ? pageOfFilteredItems.map((item: ITodoItem) => {
            return <TodoListItem key={item.id} item={item}/>
        }) :
        (<>Your list is empty</>);

    const pageSize = Math.ceil(memoizedFilteredItems.length / itemsOffset);

    return(
        <Container>
            <List>
                {listOfComponents}
            </List>
            <Pagination count={pageSize} page={currentPage} onChange={handlePagination} />
        </Container>
    )
}

export default TodoList;