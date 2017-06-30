import * as MDL from "react-mdl";
import React from "react";

const { Card, CardTitle, CardText } = MDL;

export default function(props) {
	return <div>
		<Card>
			<CardTitle className="dayNumClass">{props.week}</CardTitle>
			<CardText className="dayClass">
				<h1>{props.day}</h1>
				<div className="dayClass_month">{props.smallMonth}</div>
				<div className="dayClass_year">{props.year}</div>
			</CardText>
		</Card>
	</div>
}
