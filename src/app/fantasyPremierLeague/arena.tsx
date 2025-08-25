import React from 'react'
import SinglePlayer from './SinglePlayer'
import { fantansyFootballData } from './page'

const Arena = () => {

    const defenders = fantansyFootballData.filter((player) => player.position == "defender")
    const midfielders = fantansyFootballData.filter((player) => player.position == "midfielder")
    const attackers = fantansyFootballData.filter((player) => player.position == "attacker")
    const goalkeeper = fantansyFootballData.filter((player) => player.position == "goalkeeper")

    return (
        <div className='arena'>
            <div className="GoalKeeperArena flex justify-center items-center gap-6 p-2">
                {
                    goalkeeper.map((player) => (
                        <SinglePlayer
                            key={player.id}
                            name={player.name}
                            price={player.price}
                            position={player.position}
                            country={player.country}
                            totalFplPoint={player.totalFplPoint}
                        />
                    ))
                }
            </div>

            <div className="defenderArena flex justify-center items-center gap-6 p-2">
                {
                    defenders.map((player) => (
                        <SinglePlayer
                            key={player.id}
                            name={player.name}
                            price={player.price}
                            position={player.position}
                            country={player.country}
                            totalFplPoint={player.totalFplPoint}
                        />
                    ))
                }
            </div>
            <div className="midfieldArena flex justify-center items-center gap-6 p-2">
                {
                    midfielders.map((player) => (
                        <SinglePlayer
                            key={player.id}
                            name={player.name}
                            price={player.price}
                            position={player.position}
                            country={player.country}
                            totalFplPoint={player.totalFplPoint}
                        />
                    ))
                }
            </div>
            <div className="attackingArena flex justify-center items-center gap-6 p-2">
                {
                    attackers.map((player) => (
                        <SinglePlayer
                            key={player.id}
                            name={player.name}
                            price={player.price}
                            position={player.position}
                            country={player.country}
                            totalFplPoint={player.totalFplPoint}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Arena
