import React from 'react'
import './UserInputStyles.css'

export default function UserInput(props) {
    return (
        <div>
            <label for="name">Change author name: &nbsp;&nbsp;&nbsp;</label><br/>
            <input type='text' id='name' onChange={props.changeEvent} value={props.username}/>
        </div>
    )
}
