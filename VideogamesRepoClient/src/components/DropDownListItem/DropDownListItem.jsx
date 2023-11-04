import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from './DropDownListItem.module.css';

const DropDownListItem =({value, setState}) => {
	//variables
	const [activation, setActivation] = useState('')
	//methods
	const clickHandler = (event) =>{
		setState(value);
	};

	return (
		<>
			<a>
				<li 
					key = {value} 
					className = {style.element} 
					onClick = {clickHandler}>
						{value}
				</li>
			</a>
		</>
	);
};

export default DropDownListItem;