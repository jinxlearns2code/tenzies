import React from 'react';


export default function Die(props) {
	return (
		<div
			className="die-instance"
			style={props.isHeld ? { backgroundColor: "#59E391" } : { backgroundColor: "#FFFFFF" }}
			onClick={props.handleClick}
		>
			<h2 className="die-face">{props.value}</h2>
		</div>	
	)
}