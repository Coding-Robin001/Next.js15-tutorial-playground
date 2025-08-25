import Arena from "./arena"
import SinglePlayer from "./SinglePlayer"

export const fantansyFootballData = [
    {
        id: 1,
        name: 'cristiano ronaldo',
        price: '10million',
        position: "attacker",
        country: 'portugal',
        totalFplPoint: 300,
        currentFplPoint: 10
    },
    {
        id: 2,
        name: 'Kevin De Bruyne',
        price: '10million',
        position: "midfielder",
        country: 'belgium',
        totalFplPoint: 500,
        currentFplPoint: 10
    },
    {
        id: 3,
        name: 'maldini',
        price: '10million',
        position: "defender",
        country: 'italy',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 4,
        name: 'buffon',
        price: '10million',
        position: "goalkeeper",
        country: 'italy',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 5,
        name: 'lukaku',
        price: '8million',
        position: "attacker",
        country: 'belgium',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 6,
        name: 'osimhen',
        price: '8.5million',
        position: "attacker",
        country: 'nigeria',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 7,
        name: 'pedri',
        price: '7million',
        position: "midfielder",
        country: 'spain',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 8,
        name: 'modric',
        price: '6million',
        position: "midfielder",
        country: 'croatia',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 9,
        name: 'alexander arnold',
        price: '6million',
        position: "defender",
        country: 'england',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 10,
        name: 'van dijk',
        price: '6million',
        position: "defender",
        country: 'croatia',
        totalFplPoint: 100,
        currentFplPoint: 6
    },
    {
        id: 11,
        name: 'saliba',
        price: '6million',
        position: "defender",
        country: 'france',
        totalFplPoint: 100,
        currentFplPoint: 6
    }
]

const FantansyFootballArena = () => {
    // we could make fpl into a story by injecting a journey/feelings/emotons into based on the pov of the players
    // ronaldo unhappy with being subbed off
    // solanke prostesting he deserves to start
    // make it an adventure like those war adventures where dramatic things hapens oly inside your head
    // price

    // every registered player has access to a database of 100 players to choose from 
    // avery registered player can choose 15 fplplayer max. a regitred player has a database of 15fpl players as team
    // complete selection of 15fplPlayers is a must for every reg player


    return (
        <div>
            <Arena />
        </div>
    )
}

export default FantansyFootballArena
