import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppCard } from './components/AppCard';
import { LightenDarkenColor, categoryColors, hexToRgb } from './utils';
import { v4 } from 'uuid';
import { Icon } from '@iconify/react';

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
    paddingTop: "1em",
    paddingBottom: "1em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1em"
  }}>
    {cards}
  </div>
}

function AppCardSection({name, header, cards, color}: {name:string, header?:any, cards:any[], color?:string}) {
  return <div style={{background: color, padding: "1em",
    borderBottomColor: "white",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px"
  }}>
    <AppSectionTitle name={name}/>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      color: "rgba(255 ,255, 255, .9)",
    }}>
      <div style={{maxWidth: "400px"}}>
        {/* {(cards.length > 1 ? ` (${cards.length})`: "")} */}
        {header}
      </div>
    </div>
    <AppCardGrid cards={cards}/>
  </div>
}

function AppSection({name, children, color}: {name:string, children:any, color?:string}) {
  return <div style={{background: color, padding: "1em",
    borderBottomColor: "white",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px"
  }}>
    <AppSectionTitle name={name}/>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      color: "rgba(255 ,255, 255, .9)",
    }}>
      <div style={{maxWidth: "400px"}}>
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
        // padding: "1em",
      }}>

        <AppSection
          name={'ManaSeoul'}
        >
          <h1 style={{fontSize:"2.5em", marginTop:"-.35em", marginBottom:"1em", textAlign:"center", color: "#f9c23c", borderTop: "solid 2px #7c0921", width:"5em", marginLeft:"auto", marginRight:"auto"}}>
          <div style={{marginTop: "-.6em"}}>
            <Icon icon="fluent-emoji-flat:compass" flip="vertical" style={{position: "relative", top: ".25em", paddingTop: ".2em"}}/>
            <span >uest</span>
          </div>
          </h1>
          <p>ManaSeoul Quest is a Travel Game developed
            for Manali's Bachelorette Party.</p>
          
          <p>The goal of the game is for Manali to complete all the tasks described
            in the cards before the end of the trip.</p>

          <p>For each card, Manali will select a <b>Rival</b>, who will antagonize her during the completion of the task.</p>
        </AppSection>

        <AppCardSection
          name="Scavenger Hunts"
          color={LightenDarkenColor(categoryColors["Scavenger Hunt"], -.3)}
          header={<>
            <p>Scavenger Hunts are tasks that will push the players to search around the city for specific items.</p>
            <p><b>Rival:</b> every second time that the rival completes the action described on the card, remove a counter from Manali.</p>
          </>}
          cards={[
            
            <AppCard name="Kimchi Connoisseur" category="Scavenger Hunt" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:hot-pepper"/>}
              bodyMain="Try 30 types of Kimchi"
              flavourText="There is a bunch in the Kimchikan Museum."/>,
            
            <AppCard name="Soju Connoisseur" category="Scavenger Hunt" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:pouring-liquid"/>}
              bodyMain="Try 30 types of Soju"
              flavourText="Geonbae."/>,
            
            <AppCard name="Street Food Connoisseur" category="Scavenger Hunt" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:takeout-box"/>}
              bodyMain="Try 30 types of Street Food"
              flavourText="There is a bunch in Myeongdong Shopping Street."/>,
            
          ]}
        />

        <AppCardSection
          name="Experiences"
          color={LightenDarkenColor(categoryColors["Experience"], -.3)}
          header={<>
            <p>Experiences are one-off tasks, that can be completed only at specific locations.</p>
            <p>Every time an experience is completed, each participating player gains K-points.</p>
            <p><b>Rival:</b> the rival must perform the same action as Manali. Apart from the Rival appointed by Manali, other players can volountarily participate.</p>

          </>}
          cards={[
            
            <AppCard name="Karaoke Show" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:microphone"/>}
              bodyMain="Sing a whole song from a famous K-Pop band"
              flavourText="YE YE YE."/>,

            <AppCard name="Idol Dance" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:woman-dancing-medium"/>}
              bodyMain="Perform the choreography from a famous K-Pop song"
              flavourText="It can be practiced anywhere, but the performance will happen in the busy streets of Seoul."/>,
            
            <AppCard name="Taekwon-do" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:martial-arts-uniform"/>}
              bodyMain="Attend to a lesson of Taekwon-do"
              flavourText="And break a piece of wood."/>,

            <AppCard name="The Five Palaces" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:japanese-castle"/>}
              bodyMain="Visit the “Five palaces” wearing a hanbok, learn about Korea’s history and test her knowledge with a quiz."
              flavourText=""/>,

            <AppCard name="K-Drama" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:performing-arts"/>}
              bodyMain="Perform a scene from a K-Drama"
              flavourText="Three options will be presented"/>,

            <AppCard name="Hangul" category="Experience" key={v4()}
              imageText="한글"
              bodyMain="Write something using the Korean Ideograms"
              flavourText="Without looking at the reference."/>,

            <AppCard name="Essential Buddhist" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:lotus"/>}
              bodyMain="Perform the six practices of Korean Buddhist"
              flavourText="•&nbsp;Bowing
              •&nbsp;Seon meditation
              •&nbsp;Yeombul
              •&nbsp;Mantra
              •&nbsp;Sutra recitation
              •&nbsp;Sutra hand transcription"/>,

            <AppCard name="Cable Far" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:mountain-cableway"/>}
              bodyMain="While on the cable car, guess the distance to visible points of interests."
              flavourText="Targets will be decided on the fly."/>,
              
            <AppCard name="Kor-hair-a" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:artist-palette"/>}
              bodyMain="Color your hair like a real idol."
              flavourText="Options must be bold."/>,

            <AppCard name="Hate Cruise" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:ship"/>}
              bodyMain="Be extremely polite and loving while every other player slags you."
              flavourText="And no retrubution afterwards."/>,

            <AppCard name="Follow Me" category="Experience" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:compass"/>}
              bodyMain="Lead the party without using the map."
              flavourText="You can study the path beforehand. No notes."/>,
          ]}
        />

        <AppCardSection
          name="Burdens"
          color={LightenDarkenColor(categoryColors["Burden"], -.2)}
          header={<>
            <p>Burdens have continuous effect and both Manali and the appointed Rival have to abide to them.</p>
            <p>In case of breach, all Scavenger Hunts' current counter are reduced by one.</p>
            <p>Manali can spend a K-point to "snooze" a Burden till the end of the day.</p>
          </>}
          cards={[
            
            <AppCard name="Korean conversation" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:speaking-head"/>}
              bodyMain="Order every meal in Korean and without using gestures"
              flavourText=""/>,
            
            <AppCard name="12-step skincare procedure" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:woman-in-steamy-room-medium"/>}
              bodyMain="Every morning, perform the 12-step skincare procedure"
              flavourText=""/>,
            
            <AppCard name="Honorifics" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:woman-bowing-medium"/>}
              bodyMain="When addressing the other party members, use the typical Korean honorifics."
              flavourText=""/>,

            <AppCard name="Cheopji" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:frog"/>}
              bodyMain="Wear a cheopji when out of the bed or having a shower."
              flavourText="We will be as strict as possible."/>,

            <AppCard name="Byeolmyeong" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:baby-medium"/>}
              bodyMain="Call all players by their nickname."
              flavourText="Manali will assign the nicknames from the traditional list."/>,

            <AppCard name="Spud Carrier" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:potato"/>}
              bodyMain="Bring your spud with you all the time."
              flavourText="Why a potato? Why not?"/>,

            <AppCard name="Bonding Experience" category="Burden" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:knot"/>}
              bodyMain="Handcuff yourself to another player."
              flavourText="Chose wisely."/>,
          ]}
        />

        <AppCardSection
          name="Contests"
          color={LightenDarkenColor(categoryColors["Contest"], -.3)}
          header={<>
            <p>Contests are daily activities where all the players vote to select a winner.</p>
            <p>Players cannot vote for themselves and, in case of a tie, Manali will act as a tiebreaker.</p>
            <p>The winner of the contest gains 1 K-point.</p>
          </>}
          cards={[
            
            <AppCard name="Embarassing Moments" category="Contest" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:flushed-face"/>}
              bodyMain="Take the most embarassing picture of a player."
              flavourText="Ugh."
            />,

            <AppCard name="Spud Moments" category="Contest" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:potato"/>}
              bodyMain="Take the best picture of the spud and its carrier."
              flavourText="Why a potato? Why not?"
            />,
            
            <AppCard name="Korea Moments" category="Contest" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:selfie-medium"/>}
              bodyMain="Take the most Korean picture with one of the players."
              flavourText="So k-ool."
            />

          ]}
        />

        <AppCardSection
          name="Wildcard"
          header={<>
            <p>A wildcard of each type will be given to each player except Manali.</p>
            <p>Players can use a card to propose a new task.
              If all players agree to the new task,
              it is then added to the deck and Manali picks a new Taskmate.</p>
          </>}
          cards={[
            
            <AppCard name="Wildcard" category="Miscellaneous" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:white-question-mark"/>}
              bodyMain=""
              flavourText="Be bold."/>

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
            <AppCard name="NOPE" category="Miscellaneous" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:woman-gesturing-no-medium"/>}
              bodyMain="Refuse to be the Taskmate once."
              flavourText="You dodged this bullet."/>
          ]}
        />


        <AppCardSection
          name="K-Point"
          header={<>
            <p>Completing Experiences and Winning contests awards players with K-points.</p>
            <p>Player can use K-points to:</p>
            <ul>
              <li>Reduce Scavenger Hunts counters</li>
              <li>Gain an additional "Nope" card</li>
            </ul>
          </>}
          cards={[
            
            <AppCard name="K-Point" category="Miscellaneous" key={v4()}
              imageText={<Icon icon="fluent-emoji-flat:military-medal"/>}
              bodyMain=""
              flavourText="Be bold."/>

          ]}
        />

      </div>
    </div>
  );
}

export default App;
