import React from 'react';
import { Form, Button, Card, Alert, ListGroup, ListGroupItem, } from "react-bootstrap"
import './App.css';

export default function Store() {
    return (
        <div className="page-container">
            <h1>Store</h1>
            <br/>
            <br/>
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Phantom Bride</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button>Buy Content</Button>
            </Card.Body>
            </Card>
        </div>
    );
}

