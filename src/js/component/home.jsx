import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]);
	const [value, setValue] = useState("");
	const addTodo = onKeyDownEvent => {
		if (onKeyDownEvent.keyCode === 13) {
			const newTodo = [...todo, value];
			setTodo(newTodo);
			setValue("");
		}
	};
	const items = todo.map((item, i) => {
		return (
			<li className="list-group-item item" key={i}>
				{item}
				<button onClick={() => deleteTodo(i)}>X</button>
			</li>
		);
	});
	const deleteTodo = index => {
		const filterTodo = todo.filter((_, i) => i != index);
		setTodo(filterTodo);
	};
	return (
		<div>
			<h1>ToDo List</h1>
			<input
				className="list-group-item input"
				onKeyDown={addTodo}
				onChange={e => setValue(e.target.value)}
				value={value}></input>
			<ul>{items}</ul>
			<div>{items.length}</div>
		</div>
	);
};

export default Home;
