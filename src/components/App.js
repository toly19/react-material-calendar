import React from "react";
import * as MDL from "react-mdl";
import 'react-mdl/extra/material.js';

const { DataTable, TableHeader } = MDL;
const { Card, CardTitle, CardText } = MDL;
const { IconButton } = MDL;
class App extends React.Component {
	render() {
		let days = [
			{ day0: <div>1</div>, day1: <div>1</div>, day2:<div>1</div>, day3:<div>1</div>, day4: <div>1</div>, day5: <div>1</div>, day6:<div>1</div> },
			{ day0: <div>1</div>, day1: <div className="activeDate">1</div>, day2:<div>1</div>, day3:<div>1</div>, day4: <div>1</div>, day5: <div>1</div>, day6:<div>1</div> },
			{ day0: <div>1</div>, day1: <div>1</div>, day2:<div>1</div>, day3:<div>1</div>, day4: <div>1</div>, day5: <div>1</div>, day6:<div>1</div> },
			{ day0: <div>1</div>, day1: <div>1</div>, day2:<div>1</div>, day3:<div>1</div>, day4: <div>1</div>, day5: <div>1</div>, day6:<div>1</div> },
			{ day0: <div>1</div>, day1: <div>1</div>, day2:<div>1</div>, day3:<div>1</div>, day4: <div>1</div>, day5: <div>1</div>, day6:<div>1</div> },
		];
		return <div className="calendarDiv">
			<div>
				<Card>
					<CardTitle className="dayNumClass">Понедельник</CardTitle>
					<CardText className="dayClass">
						<h1>19</h1>
						<div className="dayClass_month">ЯНВ</div>
						<div className="dayClass_year">2017</div>
					</CardText>
				</Card>
			</div>
			<div>
				<div className="calendarTable">
					<CardTitle className="dayNumClass dayNumClass2">
						<div>
							<IconButton ripple name="keyboard_arrow_left" />
						</div>
						<div>Январь 2017</div>
						<div>
							<IconButton ripple name="keyboard_arrow_right" />
						</div>
					</CardTitle>
					<div className="tableNums">
						<DataTable rows={days}>
							<TableHeader name="day0">ПН</TableHeader>
							<TableHeader name="day1">ВТ</TableHeader>
							<TableHeader name="day2">СР</TableHeader>
							<TableHeader name="day3">ЧТ</TableHeader>
							<TableHeader name="day4">ПТ</TableHeader>
							<TableHeader name="day5">СБ</TableHeader>
							<TableHeader name="day6">ВС</TableHeader>
						</DataTable>
					</div>
				</div>
			</div>
		</div>
	}
}







export default App;