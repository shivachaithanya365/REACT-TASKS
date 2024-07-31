import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Counter from './components/Counter';
import Square from './components/Square';
import SquareAdder from './components/square-adder';

const iplTeams = [
  {
    name: "Royal Challengers Bangalore",
    logo: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    trophies: "0",
    seasons: "17"
  },
  {
    name: "Chennai Super Kings",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    trophies: "5",
    seasons: "15"
  },
  {
    name: "Mumbai Indians",
    logo: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    trophies: "5",
    seasons: "17"
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    trophies: "1",
    seasons: "12"
  },
  {
    name: "Delhi Capitals",
    logo: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    trophies: "0",
    seasons: "17"
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    trophies: "3",
    seasons: "17"
  },
  {
    name: "Punjab Kings",
    logo: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    trophies: "1",
    seasons: "17"
  },
  {
    name: "Rajasthan Royals",
    logo: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
    trophies: "1",
    seasons: "15"
  }
];

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Indian Premier League (IPL)</h1>
        <div className="App">
          {iplTeams
            .sort((a, b) => Number(b.trophies) - Number(a.trophies))
            .map(team => (
              <Card
                key={team.name}
                name={team.name}
                logo={team.logo}
                trophies={team.trophies}
                seasons={team.seasons}
              />
            ))}
        </div>
        <Counter />
        <SquareAdder />
        <Square />
        <Footer />
      </>
    );
  }
}

export default App;