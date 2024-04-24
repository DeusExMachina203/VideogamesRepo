import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import style from './GamePage.module.css';
import GameInformation from '../GameInformation/GameInformation';
import arrow from '../../media/back-plain-arrow.png'

const API_KEY = import.meta.env.VITE_KEY;
const API_URL = import.meta.env.VITE_API_URL;

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
			fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`).then(response=> response.json())
			.then(data => setGame({...data, property: 'external'}));
		}
	},[id]);


	return (
		<>
			<div className = {style.info_container}>
				<Link className = {style.back_button} to = "/principal"><img className = {style.back_arrow} src = {arrow} alt = "arrow" /></Link>
				{game.name?
					<GameInformation  img = {game.background_image? game.background_image: game.bg_image} 
						name = {game.name} 
						description = {game.description}
						launch_date = {game.launch_date} 
						rating = {game.rating}
						platforms = {game.property === 'own'?game.platforms:game.platforms.map(each => each.platform.name).join(' ')}
						genres = {game.genres?game.genres.map(genre => genre.name).join(', '):' '}
					/>
					:<span className={style.loader}></span>}
			</div>
		</>
	);
}

export default GamePage;