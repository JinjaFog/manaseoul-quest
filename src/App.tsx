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
    justifyContent: "center",
    gap: "1em"
  }}>
    {cards}
  </div>
}

function AppCardSection({name, header, cards}: {name:string, header?:any, cards:any[]}) {
  return <div>
    <AppSectionTitle name={name}/>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      color: "white",
    }}>
      <div style={{maxWidth: "800px"}}>
        {header}
      </div>
    </div>
    <AppCardGrid cards={cards}/>
  </div>
}

function AppSection({name, children}: {name:string, children:any}) {
  return <div>
    <AppSectionTitle name={name}/>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      color: "white",
    }}>
      <div style={{maxWidth: "800px"}}>
        {children}
      </div>
    </div>
  </div>
}

function App() {
  return (
    <div className="App">
      {/* BODY ROOT */}
      <div style={{
        padding: "1em",
      }}>

        <AppSection
          name={'ManaSeoul Quest'}
        >
          <p>ManaSeoul Quest is a Travel Game developed
            for Manali's Bachelorette Party.</p>
          
          <p>The goal of the game is for Manali to complete all the tasks described
            in the cards before the end of the trip.</p>

          <p>For each card, Manali will select a <b>Taskmate</b>, who will aid her in the completion of the task.</p>
        </AppSection>

        <AppCardSection
          name="Scavenger Hunts"
          cards={[
            
            <AppCard name="Kimchi Connoisseur" category="Scavenger Hunt"
              imageText="🌶️"
              bodyMain="Try 30 types of Kimchi"
              flavourText="There is a bunch in the Kimchikan Museum."/>,
            
            <AppCard name="Soju Connoisseur" category="Scavenger Hunt"
              imageText="🫗"
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
          header={<>
            <p>Experiences are one-off tasks, that can sometimes be completed only at specific locations.</p>
            <p>Every time an experience is completed, each participating player gains K-points.</p>
            <p>Player can use K-points to increase or reduce Scavenger Hunts counters.</p>
          </>}
          cards={[
            
            <AppCard name="Karaoke Show" category="Experience"
              imageText="🎤"
              bodyMain="Sing a whole song from a famous K-Pop band"
              flavourText="YE YE YE."/>,

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

            <AppCard name="Essential Buddhist" category="Experience"
              imageText="🪷"
              bodyMain="Perform the six practices of Korean Buddhist"
              flavourText="•&nbsp;Bowing
              •&nbsp;Seon meditation
              •&nbsp;Yeombul
              •&nbsp;Mantra
              •&nbsp;Sutra recitation
              •&nbsp;Sutra hand transcription"/>,

            <AppCard name="Cable Far" category="Experience"
              imageText="🚠"
              bodyMain="While on the cable car, guess the distance to visible points of interests."
              flavourText="Targets will be decided on the fly."/>,
              
            <AppCard name="Kor-hair-a" category="Experience"
              imageText="🎨"
              bodyMain="Color your hair like a real idol."
              flavourText="Options must be bold."/>,

            <AppCard name="Cruise" category="Experience"
              imageText="🚢"
              bodyMain="Dunno."
              flavourText="Eland Cruise"/>,
          ]}
        />

        <AppCardSection
          name="Modifiers"
          header={<>
            <p>Modifiers have continuous effect and both Manali and the appointed Taskmate have to abide to them.</p>
            <p>In case of breach, all Scavenger Hunts' current counter are reduced by one.</p>
          </>}
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
              imageText="🙇🏽‍♀️"
              bodyMain="When addressing the other party members, use the typical Korean honorifics."
              flavourText=""/>,

            <AppCard name="Cheopji" category="Modifier"
              imageText="🐸"
              bodyMain="Wear a cheopji when outside of the bed or the bathroom."
              flavourText="We will be as strict as possible."/>,

            <AppCard name="Byeolmyeong" category="Modifier"
              imageText="👶🏽"
              bodyMain="Call all players by their nickname."
              flavourText="Manali will assign the nicknames from the traditional list."/>,
          ]}
        />

        <AppCardSection
          name="Wildcards"
          header={<>
            <p>A wildcard of each type will be given to each player except Manali.</p>
            <p>Players can use a card to propose a new task.
              If all players agree to the new task,
              it is then added to the deck and Manali picks a new Taskmate.</p>
          </>}
          cards={[
            
            <AppCard name="Wildcard" category="Scavenger Hunt"
              imageText="❔"
              bodyMain=""
              flavourText="Be bold."/>,
            
            <AppCard name="Wildcard" category="Experience"
              imageText="❔"
              bodyMain=""
              flavourText="Be bold."/>,
            
            <AppCard name="Wildcard" category="Modifier"
              imageText="❔"
              bodyMain=""
              flavourText="Be bold."/>,
          ]}
        />

        <AppCardSection
          name="Nope"
          header={<>
            <p>A "Nope" card is given to each player except Manali.</p>
            <p>Players can use a Nope card to refuse to be the Taskmate.
              The next selection cannot use another Nope card.</p>
          </>}
          cards={[
            <AppCard name="NOPE" category="Miscellaneous"
              imageText="🙅🏽‍♀️"
              bodyMain="Refuse to be the Taskmate once."
              flavourText="You dodged this bullet."/>
          ]}
        />
      </div>
    </div>
  );
}

export default App;
