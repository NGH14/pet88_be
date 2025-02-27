import React from 'react';

import { Card as AntdCard } from 'antd';

export const Card = () => (
	<>
		<AntdCard
			id="card"
			title="Default size card"
			extra={<a href="#">More</a>}
			style={{
				width: 300,
			}}
		>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</AntdCard>
		<AntdCard
			size="small"
			title="Small size card"
			extra={<a href="#">More</a>}
			style={{
				width: 300,
			}}
		>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</AntdCard>
	</>
);
