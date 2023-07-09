import { ColorCode } from "@/assets/constants";
import { Card, Row } from "@/components";
import { Button } from "antd";
import { useState } from "react";
import ToDoList from "./ToDoList";
import { ListItem } from "./types";

const App = () => {

  const [todoList, setToDoList] = useState<ListItem[]>([]);

  const handleOnAdd = () => {
    setToDoList((currentList: ListItem[]) => {
      return (
        [
          ...currentList,
          {
            id: crypto.randomUUID(),
            taskName: "",
            isEdit: true,
            isChecked: false
          }
        ]
      );
    });
  }

  const handleOnSave = (id: string, newTaskName: string) => {
    setToDoList((currentList: ListItem[]) => {
      const newList = currentList.map(todo => {
        return todo.id === id
          ? { ...todo, taskName: newTaskName, isEdit: false }
          : { ...todo }
      })
      return newList;
    });
  }

  const handleOnEdit = (id: string) => {
    setToDoList((currentList: ListItem[]) => {
      const newList = currentList.map(todo => {
        return todo.id === id ? { ...todo, isEdit: true } : { ...todo }
      })
      return newList;
    });
  }

  const handleOnDelete = (id: string) => {
    setToDoList((currentList: ListItem[]) => {
      return currentList.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      <Card
        title="To-do List"
        width="450px"
        height="600px"
        style={{ backgroundColor: ColorCode.Secondary }}
      >
        <ToDoList
          todoList={todoList}
          handleOnSave={(id: string, newTaskName: string) => handleOnSave(id, newTaskName)}
          handleOnEdit={(id: string) => handleOnEdit(id)}
          handleOnDelete={(id: string) => handleOnDelete(id)}
        />
        <Row justify="end" className="pt-2">
          <Button
            disabled={todoList.length >= 7}
            onClick={handleOnAdd}
          >
            ADD
          </Button>
        </Row>

      </Card>
    </>
  )
}

export default App
