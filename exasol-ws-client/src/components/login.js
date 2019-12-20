import React from 'react'
import Textbox from './textbox'
import Button from './button'
import { connection } from './exasol'

function Login(props) {
    const url = "ws://localhost:8664"
    const user = "sys"
    const password = "exasol"

    return (
        <>
            <Textbox text={url} />
            <Textbox text={user} />
            <Textbox text={password} />
            <Button text="connect" onClick={() => connection(url, user, password)} />
        </>
    )
}

export default Login
