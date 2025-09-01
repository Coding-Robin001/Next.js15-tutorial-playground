import React from 'react'

const SinglePlayer = ({ name, price, position, club }
    : { name: string, price: string, position: string, club: string}) => {
    console.log(position)
    return (
        <div className='player'>
            <div>
                <h2>{name}</h2>
                <div>
                    <div className='flex items-center gap-12'>
                        <p>{price}</p>
                        <p>{club}</p>
                    </div>
                    <div className='flex items-center gap-12'>
                        <p>{position}</p>

                        <div className={`w-[40px] h-[10px] ${position == "attacker" ? "bg-[red]"
                            : position == "defender" ? "bg-[blue]"
                                : position == 'midfielder' ? "bg-[purple]"
                                    : position == "goalkeeper" ? "bg-[yellow]" : "black"}`}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePlayer
