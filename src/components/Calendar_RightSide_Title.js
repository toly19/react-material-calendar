import * as MDL from "react-mdl";
import React from "react";

const { CardTitle, IconButton } = MDL;

class Calendar_RightTableTitle extends React.PureComponent {
	constructor() {
		super();
		this.toLeft = this.toLeft.bind(this);
		this.toRight = this.toRight.bind(this);
	}
	toLeft() { this.props.changeDisplayDate(false); }
	toRight() { this.props.changeDisplayDate(true); }
	render() {
		return <CardTitle className="dayNumClass dayNumClass2">
			<div>
				<IconButton ripple name="keyboard_arrow_left" onClick={this.toLeft} />
			</div>
			<div>{this.props.month} {this.props.year}</div>
			<div>
				<IconButton ripple name="keyboard_arrow_right" onClick={this.toRight} />
			</div>
		</CardTitle>
	}
}

export default Calendar_RightTableTitle;

