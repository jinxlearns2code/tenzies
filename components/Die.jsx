import React from 'react';


export default function Die(props) {
	return (
		<div className="die-instance">
			<h2 className="die-face">{props.value}</h2>
		</div>	
	)
}