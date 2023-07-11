import { List } from "antd";
import React, { Fragment } from "react";
import { ListItem } from "../types";
import EditListItem from "./EditListItem";
import ViewListItem from "./ViewListItem";

type ToDoListProps = {
  todoList: ListItem[];
  handleOnSave: (id: string, newTaskName: string) => void;
  handleOnEdit: (id: string) => void;
  handleOnDelete: (id: string) => void;
}

const ToDoList = ({ todoList, handleOnSave, handleOnEdit, handleOnDelete }: ToDoListProps) => {
  return (
    <List>
      {todoList.map(todoItem => {
        const { id, taskName, isChecked, isEdit } = todoItem;
        return (
          <Fragment key={id}>
            {
              isEdit ? (
                <EditListItem
                  id={id}
                  taskName={taskName}
                  isChecked={isChecked}
                  handleOnSave={(id: string, newTaskName: string) => handleOnSave(id, newTaskName)}
                  handleOnDelete={(id: string) => handleOnDelete(id)}
                />
              ) : (
                <ViewListItem
                  id={id}
                  taskName={taskName}
                  isChecked={isChecked}
                  handleOnEdit={(id: string) => handleOnEdit(id)}
                  handleOnDelete={(id: string) => handleOnDelete(id)}
                />
              )
            }
          </Fragment>)
      })}
    </List>
  );
}

export default React.memo(ToDoList);