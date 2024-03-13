import React from 'react';
import ReactDOM from 'react-dom';

import "../../styles/index.css"

function SecondsCounter(props) {
	return (<div className='bigCounter'>
		<div className='d-flex align-items-center d-grid gap-1 fs-2 bg-dark'>
			<i className="fa-regular fa-clock btn btn-dark py-2 fs-2"></i>
			<div className="btn btn-dark py-2 border fs-2">{props.hoursTwo}</div>
			<div className="btn btn-dark py-2 border fs-2">{props.hours}</div>
			<div className="btn btn-dark py-2 border fs-2">{props.minutesTwo}</div>
			<div className="btn btn-dark py-2 border fs-2">{props.minutes}</div>
			<div className="btn btn-dark py-2 border fs-2">{props.secondsTwo}</div>
			<div className="btn btn-dark py-2 border fs-2">{props.seconds}</div>
		</div>

	</div>);

}

export default SecondsCounter
