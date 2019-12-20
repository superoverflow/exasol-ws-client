import React from 'react'
import { connection } from './exasol'
import { Form, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Login(props) {
    const [url, setUrl] = useState("ws://localhost:8664")
    const [user, setUser] = useState("sys")
    const [password, setPassword] = useState("exasol")

    return (
        <Row>
            <Col md={3}>
                <Form.Control
                    type="text"
                    defaultValue={url}
                    onChange={e => setUrl(e.target.value)}
                />
            </Col>
            <Col md={3}>
                <Form.Control
                    type="text"
                    defaultValue={user}
                    onChange={e => setUser(e.target.value)}
                />
            </Col>
            <Col md={3}>
                <Form.Control
                    type="text"
                    defaultValue={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Col>
            <Col md={3}>
                <Button
                    variant="primary"
                    onClick={() => connection(url, user, password)}>
                    Connect
                    </Button>
            </Col>
        </Row>
    )
}

export default Login
