import {useState, useEffect} from 'react';
import style from './ListDisplayer.module.css';
import cross from '../../media/close.png';

const ListDisplayer =  ({elements, setState, name, hasCross}) => {

	const [listElements, setListElements] = useState([]);

	const [image, setImage] = useState(cross);

	useEffect(() => {
		setListElements(elements.split('%'))
	},[elements]);

	return (
		<>
			<div className = {style.list}>
				{name? <span className={style.name}>{name}: </span>: null}
				<div className = {style.tagsList}>
					{listElements[0] !== ''?listElements.map(element => 
						<span 
							className = {hasCross == 'yes'? style.tagsCross: style.tagsNoCross } 
							onClick ={() => {
							setState(element)}} 
							key = {element}
						>
							{element}
							{hasCross === 'yes'?<img className = {style.cross} 
							src = {image} 
							alt = "cross"
							/>:null}
						</span>): null}
				</div>
			</div>
		</>
	)

};

export default ListDisplayer;