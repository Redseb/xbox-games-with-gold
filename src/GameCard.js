import './App.css';

const GameCard = ({ title, graphic, country, link }) => {
    return (
        <div className="GameCard">
            <img src={graphic} alt={title} />
            <p>{title} <br /> Available in {country}</p>
        </div>
    );
}

export default GameCard;
