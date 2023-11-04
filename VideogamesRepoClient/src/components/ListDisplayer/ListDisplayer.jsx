import {useState, useEffect} from 'react';
import style from './ListDisplayer.module.css';
import cross from '../../media/close.png'

const ListDisplayer =  ({elements, setState, name}) => {

	const [listElements, setListElements] = useState([]);

	useEffect(() => {
		setListElements(elements.split('%'))
	},[elements]);

	return (
		<>
			<div className = {style.list}>
				<span>{name}: </span>
				{listElements[0] !== ''?listElements.map(element => <span className = {style.tags} onClick ={() => {
					setState(element)}} key = {element}>
						{element}
						<img className = {style.cross} src = {cross} alt = "cross" />
					 </span>): null}
			</div>
		</>
	)

};

export default ListDisplayer;