import { useState } from "react";
import Fruct from "./Fruct";
import "./Fructe.css";

function Fructe({ title }) {
	const [listaFructe, setListaFructe] = useState([
		{ nume: "Mere", cantitate: 4 },
		{ nume: "Pere", cantitate: 1 },
	]);
	return (
		<div>
			<h2>{title}</h2>
			<p>O lista cu fructe</p>
			<div className='container'>
				{listaFructe.map((fruct, index) => {
					return (
						<Fruct key={index} nume={fruct.nume} cantitate={fruct.cantitate} />
					);
				})}
			</div>
		</div>
	);
}

export default Fructe;
