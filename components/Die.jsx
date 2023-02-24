import React from 'react';


export default function Die(props) {
	return (
		<div
			className="die-instance"
			style={props.isHeld ? { backgroundColor: "#59E391" } : { backgroundColor: "#FFFFFF" }}
			onClick={props.handleClick}
		>
			<div>
				{props.value === 1 && <div className="die 1"></div>}
				{props.value === 2 && <div className="die-container second">
					<div className="die"></div> 
					<div className="die"></div>
					</div>
				}
				{props.value === 3 && <div className="die-container third">
					<div className="die"></div> 
					<div className="die"></div>
					<div className="die"></div>
					</div>
				}
				{props.value === 4 && <div className="die-container fourth">
					<div className="die"></div> 
					<div className="die"></div>
					<div className="die"></div>
					<div className="die"></div>
					</div>
				}
				{props.value === 5 && <div className="die-container fifth">
					<div className="die one"></div> 
					<div className="die two"></div>
					<div className="die three"></div>
					<div className="die four"></div>
					<div className="die five"></div>
					</div>
				}
				{props.value === 6 && <div className="die-container sixth">
					<div className="die"></div> 
					<div className="die"></div>
					<div className="die"></div>
					<div className="die"></div>
					<div className="die"></div>
					<div className="die"></div>
					</div>
				}
			</div>
		</div>	
	)
}