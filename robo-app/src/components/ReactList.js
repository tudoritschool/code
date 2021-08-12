import "./ReactList.css";
import { useState, useEffect } from "react";
import RobotCard from "./RobotCard";
import AddRobot from "./AddRobot";
import SearchInput from "./SearchInput";

function ReactList() {
	// STATE VARIABLES
	const [userList, setUserList] = useState([]);
	const [userFilteredList, setUserFilteredList] = useState([]);

	const [search, setSearch] = useState("");

	// useEffect changes
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				setUserList(users);
				setUserFilteredList(users);
			});
	}, []);

	useEffect(() => {
		const newFilteredList = userList.filter((user) => {
			if (user.name.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}
			if (user.email.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}
			return false;
		});
		setUserFilteredList(newFilteredList);
	}, [search, userList]);

	// Custom handle fuctions
	const handleAddUser = (name, email) => {
		const newUserList = userList.map((user) => {
			return user;
		});
		newUserList.push({ name: name, email: email });
		setUserList(newUserList);
		setUserFilteredList(newUserList);
	};

	const handleSearchUser = (inputValue) => {
		console.log("Valoare noua!", inputValue);
		setSearch(inputValue);
	};

	return (
		<div className='react-view-container'>
			<AddRobot handleAddUserAtr={handleAddUser} />
			<SearchInput handleSearchUser={handleSearchUser} />
			<div className='react-list-container'>
				{userFilteredList.map((user, index) => {
					return (
						<RobotCard nameAtr={user.name} emailAtr={user.email} key={index} />
					);
				})}
			</div>
		</div>
	);
}

export default ReactList;
