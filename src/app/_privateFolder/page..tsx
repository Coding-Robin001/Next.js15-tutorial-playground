import React from 'react'

const PrivateFolder = () => {
    return (
        <div>
            <h2>
                wont be recognized as a route cos the parent directory/folder was marked with an underscore
                which makes it private
            </h2>
        </div>
    )
}

export default PrivateFolder
