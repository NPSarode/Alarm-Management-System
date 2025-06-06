import PropTypes from 'prop-types'
import React from "react"
import { Col, Modal, ModalBody, Row } from "reactstrap"

const DeleteModal = ({ show, onDeleteClick, onCloseClick }) => {
  return (
    <Modal isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <Row>
          <Col lg={12}>
            <div className="text-center">
              <i
                className="bx bx-trash text-danger "
                style={{ fontSize: "9em"}}
              />
              <h2>Are you sure?</h2>
              <h4>{"You won't be able to revert this!"}</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-danger btn-lg ms-2"
                onClick={onDeleteClick}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-lg ms-2"
                onClick={onCloseClick}
              >
                Cancel
              </button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  )
}

DeleteModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any
}

export default DeleteModal
