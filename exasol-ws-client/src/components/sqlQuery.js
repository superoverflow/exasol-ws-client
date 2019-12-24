import React from 'react'
import { query } from './exasol'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Table from './table'


function SqlQuery(props) {
    const [queryText, setQueryText] = useState("select * from finance.category_history limit 10;")
    const [resultText, setResultText] = useState("")

    const columns = [{
        Header: 'finance.category_history',
        columns: [
            {
                Header: 'id',
                accessor: 'id'
            },
            {
                Header: 'category_id',
                accessor: 'category_id'
            },
            {
                Header: 'category',
                accessor: 'category'
            },
            {
                Header: 'c_match',
                accessor: 'c_match'
            },
            {
                Header: 'c_comment',
                accessor: 'c_comment'
            },
            {
                Header: 'bank',
                accessor: 'bank'
            },
            {
                Header: 'created_date',
                accessor: 'created_date'
            },
        ]
    }]

    const data = [
        {
            id: '6da78178-ef91-42d8-adb9-0fb5a8123a6f',
            category_id: 57,
            category: 'Client Top-up',
            c_match: 'abc',
            c_comment: 'def',
            bank: 'Barclays',
            created_date: '2019-12-01'
        }
    ]

    return (
        <>
            <Row>
                <Col xs={10}>
                    <Form.Control
                        type="text"
                        defaultValue={queryText}
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
            <hr />
            <Table columns={columns} data={data} />
        </>
    )
}

export default SqlQuery
