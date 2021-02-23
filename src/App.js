import './App.css';
import GameCard from "./GameCard"

function App() {
  return (
    <div className="App">
      <h1>Xbox Games With Gold</h1>
      <div className="CurrentGames">
        <GameCard title='Resident Evil' graphic='https://store-images.s-microsoft.com/image/apps.39684.67692664087020494.db738e63-b6d5-4872-854d-74452f0cf9a7.e104a3ce-8f38-409a-a2b9-c9d1dc5b39e2' country='USA' link='https://www.microsoft.com/p/resident-evil/bnzqj2fbtdm7' />
        <GameCard title='Resident Evil' graphic='https://store-images.s-microsoft.com/image/apps.39684.67692664087020494.db738e63-b6d5-4872-854d-74452f0cf9a7.e104a3ce-8f38-409a-a2b9-c9d1dc5b39e2' country='USA' link='https://www.microsoft.com/p/resident-evil/bnzqj2fbtdm7' />
        <GameCard title='Resident Evil' graphic='https://store-images.s-microsoft.com/image/apps.39684.67692664087020494.db738e63-b6d5-4872-854d-74452f0cf9a7.e104a3ce-8f38-409a-a2b9-c9d1dc5b39e2' country='USA' link='https://www.microsoft.com/p/resident-evil/bnzqj2fbtdm7' />
        <GameCard title='Resident Evil' graphic='https://store-images.s-microsoft.com/image/apps.39684.67692664087020494.db738e63-b6d5-4872-854d-74452f0cf9a7.e104a3ce-8f38-409a-a2b9-c9d1dc5b39e2' country='USA' link='https://www.microsoft.com/p/resident-evil/bnzqj2fbtdm7' />

      </div>
      <div className="Explanation">
        <h1>How Does This Work?</h1>
        <p>Xbox Games With Gold are monthly free titles included in the Xbox Live Gold subscription. Users can claim games that are marked as available through Gold. Different regions may have different games available through the Gold programme - however users can simply login using that region’s Microsoft store and claim the game. This website shows every game available in each region through the Games with Gold programme.</p>
      </div>
      <div className="Footer">
      </div>
    </div>
  );
}

export default App;
