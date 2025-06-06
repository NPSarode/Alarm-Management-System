import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { getActiveAlarms as onGetActiveAlarms, getMachines as onGetMachines } from "../../Store/actions";

const Machines = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { machines } = useSelector(state => state.machineReducer);
  const { active_alarms } = useSelector(state => state.alarmReducer);

  const onMachineClick = (data) => {
    navigate(`/alarms/${data.id}`)
  }

  useEffect(() => {
      dispatch(onGetMachines())
  }, [dispatch])

  useEffect(() => {
      dispatch(onGetActiveAlarms())
  }, [dispatch])

  return (
    <React.Fragment>
      <Container fluid className='p-0'>
        <Card >
          <CardHeader tag={'h3'} className='bg-transparent'>
            Machines
          </CardHeader>
          <CardBody id='machine-body'>
            <Row>
              <Col lg={9}>
                <Row>
                  {
                    machines.map((data, i) => {
                      return <Col key={i} lg={3} sm={12} className='p-2 my-5'>
                        <Card className='machineCard' >
                          <CardBody>
                            <div>
                              <div id='machineImage'>
                                <img src={data.image} alt='machine' />
                              </div>
                              <div id='machineData'>
                                <CardHeader tag={'h5'} className='text-muted bg-transparent'>
                                  {data.name}
                                </CardHeader>
                                <CardBody>
                                  <div
                                    style={{
                                      minHeight: '15vh',
                                      overflow: 'hidden'
                                    }}>
                                    {data.description}
                                  </div>
                                </CardBody>
                                <div id='machineButton'>
                                  <Button
                                    color='dark'
                                    size='sm'
                                    className='rounded text-white w-75'
                                    onClick={() => {
                                      onMachineClick(data)
                                    }}
                                  >
                                    Show Alarms
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    })
                  }
                </Row>
              </Col>
              <Col lg={3} className='d-flex justify-content-center'>

                <Card style={{
                  position: 'sticky',
                  top: 0,
                  maxHeight: '83vh',
                  overflow: 'auto',
                  cursor: 'pointer'
                }} className='w-75 border border-danger bg bg-danger bg-opacity-10'>
                  <CardHeader tag={'h6'} className='text-white bg-danger py-3'>
                    Active Alarms
                  </CardHeader>
                  <CardBody>
                    {
                      active_alarms.map((data, i) => {
                        return <Row key={i}>
                          <Col key={i} lg={12} sm={12} onClick={() => {navigate(`alarms/${data.id}`)}}>
                            <div className='border border-danger p-3 rounded my-2 text-muted activeAlarms'>
                            <Row>
                              <Col lg={1} className='d-flex justify-content-center align-items-center mx-auto'>
                                  <i className='alarmIcon bx bxs-bell-ring me-2 text-danger'></i>
                              </Col>
                              <Col lg={10}>
                              <Row>
                                <Col lg={12}>
                                <div className='fw-bolder' style={{fontSize: '0.7rem', textDecoration:'underline'}}>
                                {data.machine_name}
                                </div>
                                </Col>
                                <Col lg={12}>
                                  <div>
                                  {data.alarm_name}
                                  </div>
                                </Col>
                              </Row>
                              </Col>
                            </Row>
                            </div>
                          </Col>
                        </Row>
                      })
                    }
                  </CardBody>
                </Card>

              </Col>
            </Row>

          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default Machines
