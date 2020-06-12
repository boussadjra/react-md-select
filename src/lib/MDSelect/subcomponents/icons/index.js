import React from 'react';

export const Icon = ({ name, height = '20px', width = '20px', fill = '#000' }) => {
	const icons = {
		'arrow-up': (
			<svg className="icon" height={height} width={width} fill={fill} x="0px" y="0px" viewBox="0 0 512 512">
				<path d="M149 299h214l-107 -107z" />
			</svg>
		),
		'remove': (
			<svg className="icon" height={height} width={width} fill={fill} x="0px" y="0px" viewBox="0 0 20 20">
				<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" />
			</svg>
		),
		'check':(
			<svg className="icon" style={{transform:'rotate(180deg)'}} height={height} width={width} fill={fill} x="0px" y="0px" viewBox="0 0 512 512">
			<path d="M192 167l226 226l30 -30l-256 -256l-119 119l30 30z" />
		</svg>
		)
	};
	return icons[name];
};
