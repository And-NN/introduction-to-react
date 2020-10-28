import React, { Component } from 'react';
import './App.css';

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.myClick = this.myClick.bind(this); //привязка обработчика событий к контексту через bind
	}

	myClick() {
		document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#f9f5a6ff";
	}

	render() {
		return (
			<button onClick={this.myClick} className="clicker">Изменить дизайн</button>
		)
	}
}

export default Button;