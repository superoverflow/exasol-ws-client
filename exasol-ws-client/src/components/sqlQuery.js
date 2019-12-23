import React from 'react'
import { query } from './exasol'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'

function SqlQuery(props) {
    const [queryText, setQueryText] = useState("")
    const [resultText, setResultText] = useState("")

    return (
        <>
            <Row>
                <Col xs={10}>
                    <Form.Control
                        type="text"
                        placeholder="input your sql here"
                        onChange={e => setQueryText(e.target.value)}
                    />
                </Col>
                <Col xs={2}>
                    <Button
                        variant={props.connected ? "success" : "secondary"}
                        onClick={() => query(queryText, setResultText, () => { })}
                    >
                        Run Query
                    </Button>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={12}>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        value={resultText}
                        readOnly
                    />
                </Col>
            </Row>
        </>
    )
}

export default SqlQuery
