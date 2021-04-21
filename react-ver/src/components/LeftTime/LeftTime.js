import React from "react";
import styled, { css } from 'styled-components';

// calculate left time
const yearToSecond = 365 * 24 * 60 * 60;
const MAX_LIFE_TIME = 82 * yearToSecond;
const date = new Date();
const hourToSecond = 60 * 60;
const dayToSecond = 24 * hourToSecond;
const monthToSecond = [31 * dayToSecond, 28 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond, 30 * dayToSecond, 31 * dayToSecond ];

// style components
const StyledLeftTime = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
`;

const StyledTitle = styled.h1`
	font-size: 80px;
`;

const StyledParagraph = styled.p`
	${props => props.srOnly === true ?
		css`
			font-size: 40px;
		`
		:
		css`
			border: 0 !important;
			clip: rect(1px, 1px, 1px, 1px) !important;
			-webkit-clip-path: inset(50%) !important;
			clip-path: inset(50%) !important;
			height: 1px !important;
			margin: -1px !important;
			overflow: hidden !important;
			padding: 0 !important;
			position: absolute !important;
			width: 1px !important;
			white-space: nowrap !important;
		`
	}
`;

const StyledInput = styled.input`
	${props => props.srOnly === true ?
		css`
			border: 0 !important;
			clip: rect(1px, 1px, 1px, 1px) !important;
			-webkit-clip-path: inset(50%) !important;
			clip-path: inset(50%) !important;
			height: 1px !important;
			margin: -1px !important;
			overflow: hidden !important;
			padding: 0 !important;
			position: absolute !important;
			width: 1px !important;
			white-space: nowrap !important;
		`
		:
		css`
			font-size: 40px;
			text-align: center;
			&:focus {
				border-bottom: solid 2x blue;
			}
		`
	}
`;

// LeftTime component
class LeftTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			age: 0,
			seconds: MAX_LIFE_TIME,
			ageExist: false
		};
		this.handleAge = this.handleAge.bind(this);
		this.handleSeconds = this.handleSeconds.bind(this);
		this.timer = this.timer.bind(this);
	}
	
	timer() {
		const {seconds} = this.state;
		this.setState({seconds: seconds - 1});
	}
	
	handleSeconds(event) {
		let left_time = MAX_LIFE_TIME - ((this.state.age - 1) * yearToSecond + monthToSecond[date.getMonth()] + (date.getDate() - 1) * dayToSecond + (date.getHours() - 1) * hourToSecond + (date.getMinutes() - 1) * 60 + date.getSeconds());
		
		event.preventDefault();
		this.setState({seconds: left_time, ageExist: true});
	}
	
	handleAge(event) {
		this.setState({age: event.target.value});
	}
	
	componentDidMount() {
		setInterval(this.timer, 1000);
	}
	
	render() {
		return (
			<StyledLeftTime>
				<StyledTitle>Your Time is Left for</StyledTitle>
				<form onSubmit={this.handleSeconds}>
					<StyledInput srOnly={this.state.ageExist} onChange={this.handleAge} type="text" placeholder="Enter your age" />
				</form>
				<StyledParagraph srOnly={this.state.ageExist}>{this.state.seconds} Sec.</StyledParagraph>
			</StyledLeftTime>
		);
	}
}

export default LeftTime;