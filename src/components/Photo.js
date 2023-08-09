import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
    const mode = useSelector(state => state)

    return (
        <div className="Photo">
            <img style={{'width': '250 px'}} src={mode.photo} alt="author" />
        </div>
    )
}

export default Photo
