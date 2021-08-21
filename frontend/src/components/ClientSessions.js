import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Row, Col, Card, Button } from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"
import { useHistory } from "react-router";
const Clientsessions = () => {
    let history = useHistory()
    const defaultState = {
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: "",
        location: "",
        max_class: ""
    }
    const [mySessions, setMySessions] = useState([])

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/client/classes/sessions")
            .then(res => {
                console.log(res.data)
                setMySessions(res.data.classes)
            })
            .catch(err => {
                console.log("Errror displaying", err)
            })
    }, [])
    const deleteclass = (id) => {
        console.log("delete", id)
        const sessionID=id
        axiosWithAuth().delete(`http://localhost:5000/api/client/classes/sessions/${sessionID}`)
            .then(res => {
                console.log("Successfully deleted", res)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }
    const EditSession = (id) => {
        console.log("edit",id)
        history.push(`/editSessions/${id}`)
    }
    return (
        <>
            <h1>My sessions</h1>
            <Row xs={1} md={2} className="g-4">
                {mySessions.map(((mySessions) => (
                    <Col key={mySessions.sessionID} >

                        <Card>

                            <Card.Img variant="top" src={fitness} />
                            <Card.Body>
                                <Card.Title>Name:{mySessions.name}</Card.Title>
                                <Card.Text>Type:{mySessions.type}</Card.Text>
                                <Card.Text>Intensity:{mySessions.intensity}</Card.Text>
                                <Card.Text>
                                    Location:{mySessions.location}
                                </Card.Text>
                                <Card.Text>
                                    Start Time: {mySessions.start_time}
                                </Card.Text>
                                <Button variant="primary" onClick={deleteclass.bind(this, mySessions.sessionID)}> Delete</Button>
                                <Button variant="primary" onClick={EditSession.bind(this,mySessions.sessionID)}>Edit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )))}
            </Row>

        </>
    )

}

export default Clientsessions;