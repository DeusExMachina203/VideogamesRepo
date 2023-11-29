import style from './GameCard.module.css';
import ghost from '../../media/ghost.png';
import {Link} from 'react-router-dom';

const GameCard = ({name, image, genres, id}) => {

	return(
		<>
			<Link className = {style.link} to = {`/principal/${id}`} >
				<div className = {style.card}>
					<img className = {style.card_image} src = {image?image:ghost} alt="Game" width = "500"/>
					
					<div className = {style.info}>
						<span className={style.gameTitle}>{name}</span>
						<span className = {style.genres}>{genres}</span>
					</div>
				</div>
			</Link>
		</>
	);
};

export default GameCard;