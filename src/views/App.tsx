import { ColorCode } from "@/assets/constants";
import { Card } from "@/components";
import Todo from "./todo/Todo";

const App = () => {

  return (
    <>
      <Card
        title="To-do List"
        width="450px"
        height="600px"
        style={{ backgroundColor: ColorCode.Secondary }}
      >
        <Todo />
      </Card>
    </>
  )
}

export default App
