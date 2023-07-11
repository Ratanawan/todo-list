import { ColorCode } from "@/assets/constants";
import { Col, Row } from "@/components";
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Checkbox, Input, List } from "antd";
import React, { ChangeEvent, useState } from "react";
import { ListItem } from "../types";

type EditListItemProps = ListItem & {
  handleOnSave: (id: string, taskName: string) => void;
  handleOnDelete: (id: string) => void;
}

const EditListItem = ({ id, taskName, isChecked, handleOnSave, handleOnDelete }: EditListItemProps) => {

  const [newTaskName, setNewTaskName] = useState(taskName);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  }

  return (
    <List.Item key={id} style={{ height: 64 }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Row justify="space-between">
          <Checkbox disabled checked={isChecked}>
            <Input
              size="middle"
              defaultValue={taskName}
              maxLength={26}
              style={{ marginLeft: 8 }}
              onChange={onInputChange}
              onPressEnter={() => handleOnSave(id, newTaskName)}
            />
          </Checkbox>
          <div className="mt-2">
            <CheckCircleOutlined
              style={{
                fontSize: 18,
                marginRight: 16,
                color: ColorCode.Success
              }}
              onClick={() => handleOnSave(id, newTaskName)}
            />
            <DeleteOutlined
              style={{ fontSize: 18, color: ColorCode.Danger }}
              onClick={() => handleOnDelete(id)}
            />
          </div>
        </Row>
      </Col>
    </List.Item >
  );
}

export default React.memo(EditListItem);