import React from 'react'
import SinglePlayer from './SinglePlayer'
import { PlayerData } from '@/utils/fantansyData'
import { UsersData } from '@/utils/fantansyData'

const Arena = () => {

    const defenders = PlayerData.filter((player) => player.position == "defender")
    const midfielders = PlayerData.filter((player) => player.position == "midfielder")
    const attackers = PlayerData.filter((player) => player.position == "attacker")
    const goalkeeper = PlayerData.filter((player) => player.position == "goalkeeper")

    // list of all players users chose and added to their team/array.


    return (
        <div className='arena flex gap-4'>
            <div className='teamInfo w-[300px]'>
                <h2>Speedy fc</h2>
                <hr />
                <div>
                    <p>Points and ranking</p>
                    <span>OverallPoints</span>
                    <span>Overall rank</span>
                    <span>total players</span>
                    <span>gameweek points</span>
                </div>

            </div>
            <div>
                <div>
                    <h2>Pick team</h2>
                    <span>
                        <span>Pitch View</span>
                        <span>List View</span>
                    </span>
                </div>
                <div className="GoalKeeperArena flex justify-center items-center gap-6 p-2">
                    {
                        goalkeeper.map((player) => (
                            <SinglePlayer
                                key={player.id}
                                name={player.name}
                                price={player.price}
                                position={player.position}
                                club={player.club}
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
                                club={player.club}
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
                                club={player.club}
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
                                club={player.club}
                            />
                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default Arena
