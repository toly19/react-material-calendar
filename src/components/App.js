import React from "react";
import * as MDL from "react-mdl";
import 'react-mdl/extra/material.js';
import Calendar_Left from "./Calendar_LeftSide.js";
import Calendar_RightTableTitle from "./Calendar_RightSide_Title.js";

const { DataTable, TableHeader } = MDL;

class App extends React.PureComponent {
	constructor() {
		super();
		let { days, week, month, smallMonth, year, day, monthNum } = this.calculateDataForTable(new Date(), true);
		this.state = { displayDate: { days, month, year, monthNum }, nowDate: { week, smallMonth, monthNum, year, day } };

		this.changeDisplayDate = this.changeDisplayDate.bind(this);
	}
	getDay(date) {
		let day = date.getDay();
		return day === 0 ? 6 : day - 1;
	}
	calculateDataForTable(now, drawNowDay_) {
		let week = this.weeks[now.getDay()],
			monthNum = now.getMonth(),
			month = this.month[monthNum],
			smallMonth = this.smallMonth[monthNum],
			year = now.getFullYear(),
			day = now.getDate();

		let daysInNowMonth = 32 - new Date(year, monthNum, 32).getDate(), strCount = Math.ceil(daysInNowMonth / 7);

		let days = [{}, {}, {}, {}, {}];
		let d = new Date(year, monthNum);

		let startD = this.getDay(d);
		let dd = 0;
		if (drawNowDay_ === true) {
			dd = day;
		} else if (drawNowDay_ === false) {
			dd = 0;
		} else {
			dd = drawNowDay_;
		}

		for (let i = 0; i < strCount; i++) {
			let ds = days[i];
			for (let dayW = startD; dayW < 7; dayW++) {
				let dDate = d.getDate();
				if (d.getMonth() === monthNum) {
					ds["day" + dayW] = <div className={dDate === dd ? "activeDate" : ""}>{dDate}</div>;
				}
				d.setDate(dDate + 1);
			}
			startD = 0;
		}
		let ret = { days, week, month, monthNum, smallMonth, year, day }
		return ret;
	}
	changeDisplayDate(toRight) {
		let newMonth = toRight ? this.state.displayDate.monthNum + 1 : this.state.displayDate.monthNum - 1;
		let newDate = new Date(this.state.displayDate.year, newMonth);
		let { days, month, year, monthNum } = this.calculateDataForTable(newDate, this.state.displayDate.year === this.state.nowDate.year && newMonth === this.state.nowDate.monthNum ? this.state.nowDate.day : false);
		this.setState({ displayDate: { days, month, year, monthNum } });
	}
	render() {
		return <div className="calendarDiv">
			<Calendar_Left week={this.state.nowDate.week} smallMonth={this.state.nowDate.smallMonth} day={this.state.nowDate.day} year={this.state.nowDate.year} />
			<div>
				<div className="calendarTable">
					<Calendar_RightTableTitle month={this.state.displayDate.month} year={this.state.displayDate.year} changeDisplayDate={this.changeDisplayDate} />
					<div className="tableNums">
						<DataTable rows={this.state.displayDate.days}>
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
App.prototype.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
App.prototype.smallMonth = ["ЯНВ", "ФЕВ", "МРТ", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НБР", "ДЕК"];
App.prototype.weeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

export default App;