import React from 'react'

export default function UserOutput(props) {
    return (
        <div style={props.style}>
            <p>This article is written by: {props.username}</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
    )
}
