import ghost from '../../media/ghost.png';
import style from './GameInformation.module.css';

const GameInformation = ({origin, img, name, genres, description, launch_date, rating, platforms}) => {
	return (
		<>
			<div className= {style.gameContainer}>
				<img className = {style.info_img} src = {img?img:ghost} />
				<label className = {style.info_label} htmlFor = "name">Nombre:</label>
				<span className = {style.info_bit} name = {name}>{name} </span>
				<label className = {style.info_label} htmlFor = "genres">Géneros:</label>
				<span className = {style.info_bit}>{genres} </span>
				<label className = {style.info_label} htmlFor = "description">Descripción:</label>
				<p dangerouslySetInnerHTML={{__html: description}} />
				<label className = {style.info_label} htmlFor = "launch_date">Fecha de lanzamiento:</label>
				<span className = {style.info_bit}>{launch_date} </span>
				<label className = {style.info_label} htmlFor = "Rating">Rating:</label>
				<span className = {style.info_bit}>{rating} </span>
				<label className = {style.info_label} htmlFor = "platforms">Plataformas:</label>
				<span className = {style.info_bit}>{platforms} </span>
			</div>
		</>
	)
};

export default GameInformation;