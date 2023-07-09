import { ColorCode } from "@/assets/constants";
import { Col, Row } from "@/components";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Checkbox, List, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { useState } from "react";
import { ListItem } from "./types";

type ViewListItemProps = ListItem & {
  handleOnEdit: (id: string) => void;
  handleOnDelete: (id: string) => void;
}

const ViewListItem = ({ id, taskName, isChecked, handleOnEdit, handleOnDelete }: ViewListItemProps) => {

  const [checked, setChecked] = useState(isChecked);

  const handleOnChecked = (event: CheckboxChangeEvent) => {
    setChecked(event.target.checked)
  }

  return (
    <List.Item key={id} style={{ height: 64 }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Row justify="space-between">
          <Checkbox checked={checked} onChange={handleOnChecked}>
            <Typography.Text
              style={{ fontSize: 18, fontFamily: "cursive", marginLeft: 8 }}
            >
              {taskName}
            </Typography.Text>
          </Checkbox>
          <div>
            <EditOutlined
              style={{ fontSize: 18, marginRight: 16 }}
              onClick={() => handleOnEdit(id)}
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

export default React.memo(ViewListItem);