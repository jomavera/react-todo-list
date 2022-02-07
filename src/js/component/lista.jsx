import React from "react";
import { useState, useRef } from "react";

const Lista = () => {
	const [tareas, setTareas] = useState([]);
	const [num, setNumero] = useState(0);
	const [numItems, setNumItems] = useState(0);

	const entradaUsuario = useRef("");
	const anadirTarea = (e) => {
		if (e.key === "Enter") {
			let ix = num + 1;
			setNumero(ix);
			const nuevaLista = tareas.concat({
				id: ix,
				tarea: e.target.value,
			});
			setTareas(nuevaLista);
			setNumItems(nuevaLista.length);
		}
	};
	const quitarTarea = (id) => {
		const nuevaLista = tareas.filter((e) => e.id !== id);

		setTareas(nuevaLista);
		setNumItems(nuevaLista.length);
	};

	const tareasAnadidasHTML = tareas.map((e) => {
		return (
			<li className="list-group-item d-flex bg-light" key={e.id}>
				<div className="ms-2 me-auto">{e.tarea}</div>
				<button
					type="button"
					className="btn boton"
					onClick={() => quitarTarea(e.id)}>
					X
				</button>
			</li>
		);
	});

	return (
		<div className="container bg-light">
			<div className="row">
				<div className="col-12 p-2">
					<input
						type="text"
						className="form-control"
						ref={entradaUsuario}
						placeholder="Escriba su tarea"
						onKeyDown={anadirTarea}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-12 p-2">
					<ul className="list-group list-group-flush">
						{tareasAnadidasHTML}
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-12 p-2">
					<p>
						<small>{numItems} items left</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Lista;
