import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppCard } from './components/AppCard';

function AppSectionTitle({name}:{name:string}) {
  return <h1 style={{
    display: "flex",
    justifyContent: "space-around",
    color: "white"
  }}>
    {name}
  </h1>;
}

function AppCardGrid({cards}:{cards:any[]}) {
  return <div style={{
    padding: "1em",
    display: "flex",
    flexWrap: "wrap",
    gap: "1em"
  }}>
    {cards}
  </div>
}

function AppCardSection({name, cards}: {name:string, cards:any[]}) {
  return <div>
    <AppSectionTitle name={name}/>
    <AppCardGrid cards={cards}/>
  </div>
}

function App() {
  return (
    <div className="App">
      {/* BODY ROOT */}
      <div style={{
        padding: "1em",
      }}>
        <AppCardSection
          name="Scavenger Hunts"
          cards={[
            
            <AppCard name="Kimchi Connoisseur" category="Scavenger Hunt"
              imageText="🌶️"
              bodyMain="Try 30 types of Kimchi"
              flavourText="There is a bunch in the Kimchikan Museum."/>,
            
            <AppCard name="Soju Connoisseur" category="Scavenger Hunt"
              imageText="🍶"
              bodyMain="Try 30 types of Soju"
              flavourText="Geonbae."/>,
            
            <AppCard name="Street Food Connoisseur" category="Scavenger Hunt"
              imageText="🥡"
              bodyMain="Try 30 types of Street Food"
              flavourText="There is a bunch in Myeongdong Shopping Street."/>,
            
            <AppCard name="Safari" category="Scavenger Hunt"
              imageText="📸"
              bodyMain="Try 30 types of Street Food"
              flavourText="Take pictures of"/>,
          ]}
        />

<AppCardSection
          name="Experiences"
          cards={[
            
            <AppCard name="Karaoke Show" category="Experience"
              imageText="🎤"
              bodyMain="Sing a whole song from a famous K-Pop band"
              flavourText="YE YE YE."/>,
            
            <AppCard name="Soju Connoisseur" category="Experience"
              imageText="🍶"
              bodyMain="Try 30 types of Soju"
              flavourText="Geonbae."/>,
            
            <AppCard name="Idol Dance" category="Experience"
              imageText="💃🏽"
              bodyMain="Perform the choreography from a famous K-Pop song"
              flavourText="It can be practiced anywhere, but the performance will happen in the busy streets of Seoul."/>,
            
            <AppCard name="Taekwon-do" category="Experience"
              imageText="🥋"
              bodyMain="Attend to a lesson of Taekwon-do"
              flavourText="And break a piece of wood."/>,

            <AppCard name="The Five Palaces" category="Experience"
              imageText="🏯"
              bodyMain="Visit the “Five palaces” wearing a hanbok, learn about Korea’s history and test her knowledge with a quiz."
              flavourText=""/>,

            <AppCard name="K-Drama" category="Experience"
              imageText="🎭"
              bodyMain="Perform a scene from a K-Drama"
              flavourText="Three options will be presented"/>,

            <AppCard name="Hangul" category="Experience"
              imageText="한글"
              bodyMain="Write something using the Korean Ideograms"
              flavourText=""/>,

            <AppCard name="Buddha Something" category="Experience"
              imageText="🪷"
              bodyMain="Dunno but temple."
              flavourText="Jogyesa Buddhist Temple or Jongmyo Shrine."/>,

            <AppCard name="Cable Car" category="Experience"
              imageText="🚠"
              bodyMain="No clue, the view is nice at night."
              flavourText="Namsan Cable Car"/>,

            <AppCard name="Cruise" category="Experience"
              imageText="🚢"
              bodyMain="Dunno."
              flavourText="Eland Cruise"/>,
          ]}
        />


        <AppCardSection
          name="Modifiers"
          cards={[
            
            <AppCard name="Korean conversation" category="Modifier"
              imageText="🗣️"
              bodyMain="Order every meal in Korean and without using gestures"
              flavourText=""/>,
            
            <AppCard name="12-step skincare procedure" category="Modifier"
              imageText="🧖🏽‍♀️"
              bodyMain="Every morning, perform the 12-step skincare procedure"
              flavourText=""/>,
            
            <AppCard name="Honorifics" category="Modifier"
              imageText="🙏🏽"
              bodyMain="When addressing the other party members, use the typical Korean honorifics."
              flavourText=""/>,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
