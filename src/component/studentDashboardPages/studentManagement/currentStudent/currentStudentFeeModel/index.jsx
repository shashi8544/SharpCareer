import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FeeFormModal = ({ show, handleClose, student, onSubmit }) => {
  const [feeType, setFeeType] = useState('');
  const [feeAmount, setFeeAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student.email,student.rollNo, feeType, feeAmount);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Fee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="feeType">
            <Form.Label>Fee Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fee type"
              value={feeType}
              onChange={(e) => setFeeType(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="feeAmount">
            <Form.Label>Fee Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter fee amount"
              value={feeAmount}
              onChange={(e) => setFeeAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FeeFormModal;
