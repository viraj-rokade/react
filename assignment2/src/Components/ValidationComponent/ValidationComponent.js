import React from 'react'

export default function ValidationComponent(props) {

    return (
        <div>
            {props.length<6?
                <p>Text too short!</p>
                :
                <p>Text long Enough</p>
            }
        </div>
    )
}
