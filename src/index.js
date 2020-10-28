import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './Button'
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
		)
	}
}

// ReactDOM.render(element, document.getElementById('root'));

// function Greet() {
// 	let phrase = "World!";
// 	return (
// 		<h1>{5 * 5} Hello {phrase}</h1>
// 	)
// }

// function Greet2(props) {
// 	return (
// 		<h2>Hello {props.phrasepart} my name is {props.name}</h2>
// 	)
// }

// function GreetAll() {
// 	return (
// 		<div>
// 			<Greet2 phrasepart="World," name="First" />
// 			<Greet2 phrasepart="World," name="Second" />
// 			<Greet2 phrasepart="World," name="Third" />
// 		</div>
// 	)
// }

// const element = <Greet2 phrasepart="World," name="Ivan" />;

// ReactDOM.render(<Greet />, document.getElementById('root'));
// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<GreetAll/>, document.getElementById('root'));

ReactDOM.render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
