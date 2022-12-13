import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux";
import {addreservation} from '../../JS/actions/reserAction';

export default function Addreservation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();
    const [DateR, setDate] = useState("");
    const [Cin, setCin] = useState("");
    const [Phone, setPhone] = useState("");
    const [location, setLocation] = useState("");


    const AddReservation = (e) => {
        const res = {
            DateR,
            Cin,
            Phone,
            location,

        };
        dispatch(addreservation( res ));
        window.location.reload();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Date de reservation"
                                autoFocus
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone"
                                autoFocus
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cin:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cin"
                                autoFocus
                                onChange={(e) => setCin(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="location"
                                autoFocus
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={AddReservation}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
