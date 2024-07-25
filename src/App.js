import './App.css';
import Card from './card';

const iplTeams = [
  {
    name: "Royal Challengers Bangalore",
    logo: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    trophies: "0"
  },
  {
    name: "Chennai Super Kings",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    trophies: "5"
  },
  {
    name: "Mumbai Indians",
    logo: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    trophies: "5"
  },
  {
    name: "Delhi Capitals",
    logo: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    trophies: "0"
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    trophies: "3"
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    trophies: "1"
  },
  {
    name: "Punjab Kings",
    logo: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    trophies: "1"
  },
  {
    name: "Rajasthan Royals",
    logo: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
    trophies: "1"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Indian Premier League (IPL)</h1>
      {iplTeams.map(team => (
        <Card key={team.name} name={team.name} logo={team.logo} trophies={team.trophies} />
      ))}
    </div>
  );
};

export default App;
