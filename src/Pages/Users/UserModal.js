import { useFormik } from 'formik'
import React from 'react'
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const UserModal = ({ modal, toggle }) => {

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
        }
    })
    return (
        <Modal
            isOpen={modal}
            size='md'
            centered>
            <ModalHeader tag={'h5'} toggle={() => toggle(!modal)}>
                ADD New User
            </ModalHeader>
            <ModalBody>
                <Form
                onSubmit={ e => {
                    e.preventDefault();
                    validation.submitForm();
                    validation.resetForm();
                    return
                }}>
                    <Row>
                        <Col lg={12}>
                            <div className='mb-3 bg bg-secondary p-1 bg-opacity-10'>
                                <Label>
                                    First Name
                                </Label>
                                <Input
                                    type='text'
                                    defaultValue={validation.values.first_name}
                                    placeholder='Enter First Name...'
                                    name='first_name'
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='mb-3 bg bg-secondary p-1 bg-opacity-10'>
                                <Label>
                                    Last Name
                                </Label>
                                <Input
                                    type='text'
                                    defaultValue={validation.values.last_name}
                                    placeholder='Enter Last Name...'
                                    name='last_name'
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='mb-3 bg bg-secondary p-1 bg-opacity-10'>
                                <Label>
                                    Email ID
                                </Label>
                                <Input
                                    type='email'
                                    name='email'
                                    defaultValue={validation.values.email}
                                    placeholder='Enter Email ID...'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='d-flex justify-content-end align-items-center'>
                                <Button
                                    size='sm'
                                    color='primary'
                                    type='submit'>
                                    Add User
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UserModal
