import React from 'react'
import Textbox from './textbox'
import Button from './button'
import { connection, query } from './exasol'

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
            <Button text="run query" onClick={() => query("select 1984 from dual")} />
        </>
    )
}

export default Login
