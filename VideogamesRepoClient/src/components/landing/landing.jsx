import style from './landing.module.css';
import {Link} from 'react-router-dom';
import kirby from '../../media/kirby.png';

const Landing = (props) => {

	return(
		<>
			<div className = {style.landing}>
				<img src ={kirby} alt = "kirby characters" className = {style.title_image} />
				<h1 className = {`${style.title}`}> ¡Bienvenido, gamer! </h1>
				<Link className = {style.link} to = '/principal'><button className = {style.principal_button}>Ingresa aquí</button></Link>
			</div>
		</>
	);
};

export default Landing;