import { Card as AntdCard } from "antd";
import React from "react";
import { styled } from "styled-components";

type CardProps = {
  title: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledCard = styled(AntdCard)`
  .ant-card-head-title {
    font-size: 24px;
    font-weight: bold;
    font-family: cursive;
    display: flex;
    justify-content: center;
  }
  .ant-card-body {
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 8px;
  }
`;

const Card = ({
  width = "300px",
  height = "500px",
  title,
  children,
  style,
}: CardProps) => {
  return (
    <StyledCard
      title={title}
      style={{
        width,
        height,
        borderRadius: 16,
        ...style,
      }}
    >
      {children}
    </StyledCard>
  );
}

export default Card;