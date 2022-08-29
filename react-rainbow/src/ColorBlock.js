import React from 'react'

function ColorBlock(props) {
    return (
        <div classname="colorBlock"
        style={{'backgroundcolor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock