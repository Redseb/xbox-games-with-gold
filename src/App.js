import './App.css';
import GameCard from "./GameCard"
import { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  console.log(games);
  useEffect(() => {
    fetch('https://xbox-games-with-gold.herokuapp.com/')
      .then(response => response.json())
      .then(data => setGames(Object.values(data)));
  }, [])
  if (games.length === 0) {
    return (
      <div className="App">
        <h1>Fetching Available Games...</h1>
      </div>
    );
  }
  const gameCards = [];
  for (const [index, val] of games.entries()) {
    gameCards.push(<GameCard key={index} title={val.name} graphic={val.image} availability={val.availability} link={val.link} />)
  }
  return (
    <div className="App">
      <h1>Xbox Games With Gold</h1>
      <div className="CurrentGames">
        {gameCards}
      </div>
      <div className="Explanation">
        <h1>How Does This Work?</h1>
        <p>Xbox Games With Gold are monthly free titles included in the Xbox Live Gold subscription. Users can claim games that are marked as available through Gold. Different regions may have different games available through the Gold programme - however users can simply login using that region’s Microsoft store and claim the game. This website shows every game available in each region through the Games with Gold programme.</p>
      </div>
      <div className="Footer">
        <a href="https://www.mikozyz.dev">mikozyz.dev</a>
        <a href="mailto:mikolajzyzanski@gmail.com">Contact Me</a>
      </div>
    </div>
  );
}

export default App;
