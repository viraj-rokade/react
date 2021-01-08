import React from 'react'

export default function CharComponent(props) {
    return (
        <div style={props.style} onClick={props.click}>
            {props.letter}
        </div>
    )
}
