import './App.css';

const GameCard = ({ title, graphic, country, link }) => {
    return (
        <div className="GameCard">
            <a href={link}>
                <img src={graphic} alt={title} />
            </a>
            <p>{title} <br /> Available in <a href={link}>{country}</a></p>
        </div>
    );
}

export default GameCard;
