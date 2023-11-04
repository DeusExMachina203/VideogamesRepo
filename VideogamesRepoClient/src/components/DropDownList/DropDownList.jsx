import {useState} from 'react';
import DropDownListItem from '../DropDownListItem/DropDownListItem';
import style from './DropDownList.module.css';
import arrow from '../../media/down.png';

const DropDownList = ({setState, name, elements, splitChar}) => {

	//variables
	const [show, setShow] = useState(false);
	const elementList = elements.split(splitChar);

	//methods
	const showDrop = () => {
		setShow(true);
	};
	const hideDrop = () => {
		setShow(false);
	};

	return(
		<>
			<div className = {style.container} onMouseEnter={showDrop} onMouseLeave={hideDrop}>
				{name}
				<img src = {arrow} alt = "down" />
				{
					show?<ul className = {style.list}>
						{elementList.map(element => (
							<DropDownListItem 
							key = {element}
							value = {element}
							setState = {setState} 
							/>
						))}
					</ul>:null
				}
			</div>
		</>
	);
};

export default DropDownList;