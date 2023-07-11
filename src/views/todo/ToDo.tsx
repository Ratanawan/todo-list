import React from "react";
import ToDoList from "./components/ToDoList";
import { Row } from "@/components";
import { Button } from "antd";
import useTodo from "./useTodo";

const ToDo = () => {

  const { todoList, handleOnSave, handleOnEdit, handleOnDelete, handleOnAdd } = useTodo();

  return (
    <>
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
    </>
  )
}

export default React.memo(ToDo)