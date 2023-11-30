import style from './BigButton.module.css';

const BigButton = ({ text, onClick }) => {
    return (
        <button className = {style.big_button} onClick = {onClick}>{text}</button>
    );
}

export default BigButton;