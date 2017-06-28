import React from "react";
import * as MDL from "react-mdl";
import 'react-mdl/extra/material.js';

const { DataTable, TableHeader } = MDL;
const { Card, CardTitle, CardText } = MDL;
const { IconButton } = MDL;
class App extends React.Component {
	render() {
		let now = new Date();
		let nowWeek = this.weeks[now.getDay()];
		let nowMonthNum = now.getMonth();
		let nowMonth = this.month[nowMonthNum];
		let nowSmallMonth = this.smallMonth[nowMonthNum];
		let nowYear = now.getFullYear();
		let nowDay = now.getDate();

		let daysInNowMonth = 32 - new Date(nowYear, nowMonthNum, 32).getDate();
		let strCount = Math.ceil(daysInNowMonth / 7);

		let days = [{}, {}, {}, {}, {}];
		let d = new Date(nowYear, nowMonthNum);
		function getDay(date) {
			let day = date.getDay();
			return day === 0 ? 6 : day - 1;
		}
		let startD = getDay(d);
		for (let i = 0; i < strCount; i++) {
			let ds = days[i];
			for (let day = startD; day < 7; day++) {
				let dDate = d.getDate();
				if (d.getMonth() === nowMonthNum) {
					ds["day" + day] = <div className={dDate===nowDay?"activeDate":""}>{dDate}</div>;
				}
				d.setDate(dDate + 1);
			}
			startD = 0;
		}
		return <div className="calendarDiv">
			<div>
				<Card>
					<CardTitle className="dayNumClass">{nowWeek}</CardTitle>
					<CardText className="dayClass">
						<h1>{nowDay}</h1>
						<div className="dayClass_month">{nowSmallMonth}</div>
						<div className="dayClass_year">{nowYear}</div>
					</CardText>
				</Card>
			</div>
			<div>
				<div className="calendarTable">
					<CardTitle className="dayNumClass dayNumClass2">
						<div>
							<IconButton ripple name="keyboard_arrow_left" />
						</div>
						<div>{nowMonth} {nowYear}</div>
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
App.prototype.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Декабрь"];
App.prototype.smallMonth = ["ЯНВ", "ФЕВ", "МРТ", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НБР", "ДЕК"];
App.prototype.weeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];








export default App;