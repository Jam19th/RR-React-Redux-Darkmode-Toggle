import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const mode = useSelector(state => state)

    return (
        <div className="Footer" style={{'backgroundColor': mode.color3, 'color': "white"}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
