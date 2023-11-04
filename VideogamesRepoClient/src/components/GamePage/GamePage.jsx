import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import style from './GamePage.module.css';
import GameInformation from '../GameInformation/GameInformation';
import arrow from '../../media/back.png'

const GamePage = () => {
	//variables
	const {id} = useParams();
	const [game, setGame] = useState({}); 
 	const regexId = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
	//methods
	useEffect(() => {
		if(regexId.test(id)){
			fetch(`${API_URL}/videogames/${id}`)
			.then(response => response.json())
			.then(data => setGame({...data, property: 'own'}));
		}
		else{
			fetch(`https://api.rawg.io/api/games/${id}?key=c281fe64559346ee8e2a1c9c99cf53a9`).then(response=> response.json())
			.then(data => setGame({...data, property: 'external'}));
		}
	},[id]);


	return (
		<>
			<div className = {style.info_container}>
				<Link className = {style.back_button} to = "/principal"><img className = {style.back_arrow} src = {arrow} alt = "arrow" /><h3>Atrás</h3></Link>
				{game.name?
					<GameInformation  img = {game.background_image} 
						name = {game.name} 
						description = {game.description}
						launch_date = {game.launch_date} 
						rating = {game.rating}
						platforms = {game.property === 'own'?game.platforms:game.platforms.map(each => each.platform.name).join(' ')}
						genres = {game.genres?game.genres.map(genre => genre.name).join(' '):' '}
					/>
					:<span className={style.loader}></span>}
			</div>
		</>
	);
}

export default GamePage;