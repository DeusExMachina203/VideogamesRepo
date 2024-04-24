import ghost from '../../media/ghost.png';
import style from './GameInformation.module.css';
import ListDisplayer from '../ListDisplayer/ListDisplayer.jsx';

const GameInformation = ({origin, img, name, genres, description, launch_date, rating, platforms}) => {


	return (
		<>

			<div className={style.heading}>
				<div className={style.text}>
					<div className={style.title}>
						<h1 className={style.game_name}>{name}</h1>
					</div>

					<div className= {style.game_information}>
						<ListDisplayer className = {style.tags} elements={genres.split(', ').join('%')} name="Géneros" />
						<label className = {style.info_label} htmlFor = "launch_date">Fecha de lanzamiento:</label>
						<span className = {style.info_bit}>{launch_date} </span>
						<label className = {style.info_label} htmlFor = "Rating">Rating:</label>
						<span className = {style.info_bit}>{rating} </span>
						<label className = {style.info_label} htmlFor = "platforms">Plataformas:</label>
						<ListDisplayer className = {style.tags}  elements={platforms.split(' ').join('%')}s name=""/>
						<label className = {style.info_label} htmlFor = "description">Descripción:</label>
						<p dangerouslySetInnerHTML={{__html: description}} />
						
						
					</div>
				</div>
				<img src={img?img:ghost} className={style.game_background_image} alt="game image" />
			</div>
			
		</>
	)
};

export default GameInformation;