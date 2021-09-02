import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import AdDesigner from './Components/AdDesigner';
import Votes from './Components/Votes';
import Ad from './Components/Ad';

function App() {
  return (
    <div className="App">
      <Header user="Scott" />
      <div className="AdContainer">
        <Ad flavor="Chocolate" fontSize={40} darkTheme={true} />
        <Ad flavor="Vanilla" fontSize={40} darkTheme={false} />
        <Ad flavor="Strawberry" fontSize={40} darkTheme={true} />
      </div>
      <section>
        <AdDesigner />
        <Votes />
      </section>
    </div>
  );
}

export default App;
