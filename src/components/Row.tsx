import React, { PropsWithChildren } from "react";
import { Row as AntdRow } from "antd";
import { Gutter } from "antd/es/grid/row";

type RowType = PropsWithChildren & {
	gutter?: Gutter | [Gutter, Gutter];
	justify?: "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly";
	align?: "top" | "middle" | "bottom" | "stretch";
	className?: string;
};

const Row = ({ gutter = 24, className, justify, align, children }: RowType) => {
	return (
		<AntdRow gutter={gutter} className={className} justify={justify} align={align}>
			{children}
		</AntdRow>
	);
};

export default React.memo(Row);
