import React from 'react'

const SinglePlayer = ({ name, price, position, country, totalFplPoint }
    : { name: string, price: string, position: string, country: string, totalFplPoint: number }) => {
    console.log(position)
    return (
        <div className='player'>
            <div>
                <h2>{name}</h2>
                <div>
                    <div className='flex items-center gap-12'>
                        <p>{price}</p>
                        <p>{country}</p>
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
                <h3>Total FPL point: {totalFplPoint}</h3>
            </div>
        </div>
    )
}

export default SinglePlayer
