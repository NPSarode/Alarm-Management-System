import React, { useEffect, useMemo, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import TableContainer from '../../Components/TableContainer'
import { DeleteLinkSmall, EditLinkSmall } from '../../Components/Link'
import AlarmModal from './AlarmModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlarm, getAlarmsById } from '../../Store/Alarms/action'
import { useParams } from 'react-router-dom'
import DeleteModal from '../../Components/DeleteModal'

const Alarms = () => {

    const { id } = useParams()

    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [data, setData] = useState({})

    const dispatch = useDispatch()
    const { alarm } = useSelector( state => state.alarmReducer)

    const columns = useMemo(() => [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Alarm Name', accessor: 'name' },
        { Header: 'Alarm Description', accessor: 'description' },
        {
            Header: 'Status', accessor: 'status',
            Cell: cellProp => {
                const data = cellProp.cell.row.original

                return <span className={`d-flex justify-content-center align-items-center rounded p-1 border bg bg-opacity-10 ${!data.status ? 'text-success border-success bg-success' : 'text-danger border-danger bg-danger'}`}>
                    {data.status ? "Active" : "Inactive"}
                </span>
            }
        },
        { Header: 'Notification List', accessor: 'user_names',
            Cell: cellProp => {
                const data = cellProp.cell.row.original


                return <div key={data.id} className='d-flex justify-content-start align-items-center gap-2 p-1 rounded'>
                    {
                        data.user_names.map((data, i) => {
                            return <span className='bg-warning bg-opacity-25 w-25 text-center rounded border border-warning'>
                                {data}
                            </span>
                        })
                    }
                </div>
            }
         },
        {
            Header: 'Actions', accessor: '',
            Cell: cellProp => {
                const data = cellProp.cell.row.original

                return <div className='d-flex justify-content-center align-items-center gap-2'>
                    <EditLinkSmall
                    onClick={() => {
                        setModal(!modal)
                        setData(data)
                    }}
                    />
                    <DeleteLinkSmall
                    onClick={(e) => {
                        setData(data)
                        setDeleteModal(!deleteModal)
                    }}/>
                </div>
            }
        },
    ], [])

    const onDeleteClick = () => {
        dispatch(deleteAlarm(data.id))
        setData({})
        setDeleteModal(!deleteModal)
    }

    useEffect(() => {
        dispatch(getAlarmsById(id))
    }, [dispatch, id])

    return (
        <React.Fragment>
            <Container fluid className='p-0'>
                <Card>
                    <CardHeader tag={'h3'}>
                        Alarms
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={12} className='d-flex '>
                                <div className='d-flex justify-content-start align-items-center w-50'>
                                </div>
                                <div className='d-flex justify-content-end align-items-center w-50'>
                                    <Button
                                        size='sm'
                                        color='primary'
                                        onClick={() => {
                                            setModal(!modal)
                                        }}>
                                        Add Alarm
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <TableContainer
                                    columns={columns}
                                    data={alarm}
                                    customPageSize={10}
                                />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
            {
                modal && <AlarmModal
                    modal={modal}
                    toggle={setModal}
                    data={data}
                    setData={setData} />
            }

            {
                deleteModal && <DeleteModal
                show={deleteModal}
                onDeleteClick={onDeleteClick}
                onCloseClick={() => {
                    setDeleteModal(!deleteModal)
                    setData({})
                }}/>
            }
        </React.Fragment>
    )
}

export default Alarms
