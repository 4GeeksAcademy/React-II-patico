import React from "react";

//include images into your bundle
 
//create your first component
const Home = ({counter}) => {
	
	const unidad = counter % 10;
	const decena = Math.floor(counter / 10) % 10;
	const centena = Math.floor(counter / 100) % 10;
	const unidadMillar = Math.floor(counter / 1000) % 10gi;
	const decenaMillar = Math.floor(counter / 10000) % 10;
	const centenaMillar = Math.floor(counter / 100000) % 10;

	return (
            <div className="d-flex justify-content-center mt-5">
    		<div className="d-flex bg-dark p-2">
			<div className="bg-dark text-white p-3 m-1 d-flex justify-content-center align-items-center">
    		<i className="fa-solid fa-clock"></i>
			</div>
			<p className="bg-dark text-white p-3 m-1">{centenaMillar}</p>
			<p className="bg-dark text-white p-3 m-1">{decenaMillar}</p>
			<p className="bg-dark text-white p-3 m-1">{unidadMillar}</p>
			<p className="bg-dark text-white p-3 m-1">{centena}</p>
			<p className="bg-dark text-white p-3 m-1">{decena}</p>
			<p className="bg-dark text-white p-3 m-1">{unidad}</p>
  
			</div>	
			</div>
	);
};

export default Home;