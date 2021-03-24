import React, { Fragment, useState } from 'react';

const Contador = () => {

	const [contador, setContador] = useState(0)

	const [menu, setMenu] = useState(null)

	const [background, setBackground] = useState('bg-light')

	const [btnColor, setBtnColor] = useState('btn-primary')

	const [colorTexto, setColorTexto] = useState('text-dark')

	const aumentar = () => {
		setContador(contador + 1)
	}

	const bajar = () => {
		if (contador === 0) {
			return
		}
		setContador(contador - 1)
	}

	const cero = () => {
		setContador(0)
	}

	const menuMostrar = () => {
		setMenu(1)
	}

	const menuOcultar = () => {
		setMenu(null)
	}

	const backgroundCambio = (color) => {
		setBackground(color)
	}

	const colorCambio = (color) => {
		setBtnColor(color)
	}

	const textoCambio = (color) => {
		setColorTexto(color)
	}

	return (
		<Fragment>
			<div className={background}>
				<div className="content">
					<h1 className={colorTexto}>{contador}</h1>
					<div className="buttons">
						<button onClick={aumentar} className={`btn ${btnColor}`}>+</button>
						<button onClick={bajar} className={`btn ${btnColor}`}>-</button>
					</div>
					<button onClick={cero} className={`btn ${btnColor} cero w-100 mt-3`}>Volver a cero</button>
					<button onClick={menuMostrar} className={`btn ${btnColor} cero w-100 mt-2`}>Personalizar</button>
				</div>
				<div className={menu ? 'visible menu' : 'oculto menu'}>
					<h3 className="text-white">Fondo</h3>
					<div className="opciones">
						<div className="opcion bg-dark" onClick={() => backgroundCambio('bg-dark')}></div>
						<div className="opcion bg-light" onClick={() => backgroundCambio('bg-light')}></div>
						<div className="opcion bg-danger" onClick={() => backgroundCambio('bg-danger')}></div>
						<div className="opcion bg-info" onClick={() => backgroundCambio('bg-info')}></div>
						<div className="opcion bg-success" onClick={() => backgroundCambio('bg-success')}></div>
						<div className="opcion bg-warning" onClick={() => backgroundCambio('bg-warning')}></div>
					</div>
					<h3 className="text-white">Botones</h3>
						<div className="opciones">
						<div className="opcion bg-success" onClick={() => colorCambio('btn-success')}></div>
						<div className="opcion bg-primary" onClick={() => colorCambio('btn-primary')}></div>
						<div className="opcion bg-warning" onClick={() => colorCambio('btn-warning')}></div>
						<div className="opcion bg-danger" onClick={() => colorCambio('btn-danger')}></div>
						<div className="opcion bg-dark" onClick={() => colorCambio('btn-dark')}></div>
						<div className="opcion bg-info" onClick={() => colorCambio('btn-info')}></div>
					</div>
					<h3 className="text-white">Texto</h3>
					<div className="opciones">
						<div className="opcion bg-primary" onClick={() => textoCambio('text-primary')}></div>
						<div className="opcion bg-danger" onClick={() => textoCambio('text-danger')}></div>
						<div className="opcion bg-dark" onClick={() => textoCambio('text-dark')}></div>
						<div className="opcion bg-white" onClick={() => textoCambio('text-white')}></div>
					</div>
					<button onClick={menuOcultar} className={`btn btn-primary mt-2`}>Ver cambios</button>
				</div>
			</div>
		</Fragment>
	)
}

export default Contador