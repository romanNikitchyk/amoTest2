import React from 'react';
import {Landing} from "./Components/Landing/Landing";
import {Header} from "./Components/Header/Header";
import {OwnCharacter} from "./Components/OwnCharacter/OwnCharacter";
import {LatestNews} from "./Components/LatestNews/LatestNews";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (<div>
      <Header/>
      <Landing/>
      <OwnCharacter/>
      <LatestNews/>
      <Footer/>
    </div>

  );
}

export default App;
