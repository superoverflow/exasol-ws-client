import React from 'react'
import Button from './button'
import { query } from './exasol'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'

function SqlQuery(props) {
    const [queryText, setQueryText] = useState("")
    const [resultText, setResultText] = useState("")

    return (
        <>
            <Form.Control
                type="text"
                placeholder="input your sql here"
                onChange={e => setQueryText(e.target.value)}
            />
            <Button
                text="run query"
                onClick={() => query(queryText, setResultText)}
            />
            <Form.Control
                type="text"
                placeholder={resultText}
            />
        </>
    )
}

export default SqlQuery
