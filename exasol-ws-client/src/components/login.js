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
            <Col sm={1}>
                <Form.Label>Url: </Form.Label>
            </Col>
            <Col sm={3}>
                <Form.Control
                    type="text"
                    defaultValue={url}
                    onChange={e => setUrl(e.target.value)}
                />
            </Col>
            <Col sm={1}>
                <Form.Label>User: </Form.Label>
            </Col>
            <Col md={2}>
                <Form.Control
                    type="text"
                    defaultValue={user}
                    onChange={e => setUser(e.target.value)}
                />
            </Col>
            <Col sm={1}>
                <Form.Label>Password: </Form.Label>
            </Col>
            <Col md={2}>
                <Form.Control
                    type="password"
                    defaultValue={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Col>
            <Col md={1}>
                <Button
                    variant="primary"
                    onClick={() => connection(url, user, password, props.connectCallback)}>
                    Connect
                    </Button>
            </Col>
        </Row>
    )
}

export default Login
