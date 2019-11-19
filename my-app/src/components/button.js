import React from 'react'

function Button(props) {
    return (
        <button type="button" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
