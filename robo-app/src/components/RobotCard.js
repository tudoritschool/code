import "./RobotCard.css";

function RobotCard({ nameAtr, emailAtr }) {
	return (
		<div className='container-card'>
			<img
				src={`https://robohash.org/${nameAtr}.png?size=100x100`}
				alt='Robot'></img>
			<h2>{nameAtr}</h2>
			<h3>{emailAtr}</h3>
		</div>
	);
}

export default RobotCard;
