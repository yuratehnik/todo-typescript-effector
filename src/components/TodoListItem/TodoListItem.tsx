import React from "react";
import {Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {ITodoItem} from "../../types/types";
import {handleCheckedTodoEvent, removeTodoEvent} from "../../store/store";
interface ITodoListItem {
    item: ITodoItem;
}

const TodoListItem: React.FC<ITodoListItem> = ({item}) => {
    return (
        <ListItem
            key={item.id}
            divider>
            <ListItemIcon>
                <Checkbox
                    checked={item.isChecked}
                    onChange={(e)=>handleCheckedTodoEvent({event: e, id: item.id})}
                />
            </ListItemIcon>
            <ListItemText
                primary={item.text}
                style={{ textDecoration : item.isChecked ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>{removeTodoEvent(item.id)}}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoListItem;
