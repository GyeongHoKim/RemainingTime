import React from 'react';
import "./ToDo.css";

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ['Click when you did it']
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		let items = this.state.list;
		let item = event.target.querySelector(".todo-question").value;
		
		this.setState({list: items.concat([item])});
		event.target.querySelector(".todo-question").value = "";
	}
	
	handleClick(event) {
		const item = event.target
		if (item.classList.contains("checked"))
			item.parentNode.removeChild(item);
		else
			item.classList.add("checked");
	}

	render() {
		const todo = this.state.list;
		if (this.props.flag)
			return (
				<div className="todo-container">
					<form className="todo-questions" onSubmit={this.handleSubmit}>
						<input
							className="todo-question"
							type="text"
							placeholder="What will you do today? Write it in here!"
						/>
					</form>
					<ul className="todo-list">
						{todo.map((item) => (<li onClick={this.handleClick} className="todo-item" key={item}>{item}</li>))}
					</ul>
				</div>
			);
		else
			return null;
	}
}

export default ToDo;