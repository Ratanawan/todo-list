import React, { PropsWithChildren } from "react";
import { Col as AntdCol } from "antd";

type ColSpanType = number | string;

type ColType = PropsWithChildren & {
	xs?: ColSpanType;
	sm?: ColSpanType;
	md?: ColSpanType;
	lg?: ColSpanType;
	xl?: ColSpanType;
	xxl?: ColSpanType;
	className?: string;
	style?: React.CSSProperties;
};

const Col = ({
	xs = 24,
	sm = 12,
	md = 12,
	lg = 12,
	xl = 8,
	xxl = 6,
	className,
	style,
	children,
}: ColType) => {
	return (
		<AntdCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} className={className} style={style}>
			{children}
		</AntdCol>
	);
};

export default React.memo(Col);
