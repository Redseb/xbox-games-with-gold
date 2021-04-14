import './App.css';

const GameCard = ({ title, graphic, availability, link }) => {
    return (
        <div className="GameCard">
            <a href={link}>
                <img src={graphic} alt={title} />
            </a>
            <p><a href={link}>{title}</a><br /> Available {availability}</p>
        </div>
    );
}

export default GameCard;
