import { useState } from "react";
import { ListItem } from "./types";

const useTodo = () => {
  const [todoList, setToDoList] = useState<ListItem[]>([
    {
      id: crypto.randomUUID(),
      taskName: "",
      isEdit: true,
      isChecked: false,
    },
  ]);

  const handleOnAdd = () => {
    setToDoList((currentList: ListItem[]) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          taskName: "",
          isEdit: true,
          isChecked: false,
        },
      ];
    });
  };

  const handleOnSave = (id: string, newTaskName: string) => {
    setToDoList((currentList: ListItem[]) => {
      const newList = currentList.map((todo) => {
        return todo.id === id
          ? { ...todo, taskName: newTaskName, isEdit: false }
          : { ...todo };
      });
      return newList;
    });
  };

  const handleOnEdit = (id: string) => {
    setToDoList((currentList: ListItem[]) => {
      const newList = currentList.map((todo) => {
        return todo.id === id ? { ...todo, isEdit: true } : { ...todo };
      });
      return newList;
    });
  };

  const handleOnDelete = (id: string) => {
    setToDoList((currentList: ListItem[]) => {
      return currentList.filter((todo) => todo.id !== id);
    });
  };

  return { todoList, handleOnAdd, handleOnSave, handleOnEdit, handleOnDelete };
};

export default useTodo;
