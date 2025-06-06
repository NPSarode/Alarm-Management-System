import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlarmCount, getAlarmHistoryLog, getAlarmTypesById } from "../../Store/Alarms/action";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { getMachines } from "../../Store/actions";
import BasicListAsTable from "../../Components/BasicListAsTable";

const Analysis = () => {
  const [machineId, setMachineId] = useState(null);

  const dispatch = useDispatch();
  const { alarm_count, alarm_type_by_id, history_log } = useSelector(
    (state) => state.alarmReducer
  );
  const { machines } = useSelector((state) => state.machineReducer);

  const columns = useMemo(
    () => [
      { Header: "Alarm Name", accessor: "alarm_name" },
      { Header: "Alarm Generated At", accessor: "created_at", Cell: (data) => data.created_at.split(".")[0]},
    ],
    []
  );

  useEffect(() => {
    if (alarm_count && !alarm_count.length) 
        dispatch(getAlarmCount());
  }, [dispatch, alarm_count]);

  useEffect(() => {
    if (machines && !machines.length) 
        dispatch(getMachines());
  }, [dispatch, machines]);

  useEffect(() => {
    if (machineId) {
        dispatch(getAlarmTypesById(machineId));
        dispatch(getAlarmHistoryLog(machineId));
    }
  }, [dispatch, machineId]);

  useEffect(() => {
    if (machines.length) 
        setMachineId(machines[0].id);
  }, [dispatch, machines]);

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="bg bg-secondary bg-opacity-10 d-flex justify-content-start align-items-center gap-3 shadow border p-2 rounded">
                  <Label className="text-muted fw-bolder">
                    Overall Active Alarm Summary
                  </Label>
                </div>
                {alarm_count && (
                  <BarChart
                    data={alarm_count}
                    chartId={"bar_chart"}
                    categoryXField={"alarm_name"}
                    valueYField={"count"}
                    yAxisTite={"Count"}
                    width={"100%"}
                    height={"250px"}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={6}>
            <Card>
              <CardTitle>
                <Row>
                  <Col lg={12}>
                    <div className="bg bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center gap-3 shadow border p-2 rounded">
                      <Label className="text-muted fw-bolder">Machine</Label>
                      <Input
                        type="select"
                        onChange={(e) => setMachineId(e.target.value)}
                      >
                        {machines.map((data, i) => {
                          return (
                            <option key={i} value={data.id}>
                              {data.name}
                            </option>
                          );
                        })}
                      </Input>
                    </div>
                  </Col>
                </Row>
              </CardTitle>
              <CardBody>
                {alarm_type_by_id && (
                  <PieChart
                    data={alarm_type_by_id}
                    chartId={"pieChart"}
                    width={"100%"}
                    height={"350px"}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <CardTitle>
                <Row>
                  <Col lg={12}>
                    <div className="bg bg-secondary bg-opacity-10 d-flex justify-content-start align-items-center gap-3 shadow border p-2 rounded">
                      <Label className="text-muted fw-bolder">
                        Active Alarm Log
                      </Label>
                    </div>
                  </Col>
                </Row>
              </CardTitle>
              <CardBody>
                <BasicListAsTable columns={columns} data={history_log} color="primary" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Analysis;
