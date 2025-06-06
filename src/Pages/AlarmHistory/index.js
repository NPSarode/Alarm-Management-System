import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import TableContainer from "../../Components/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAlarmHistory } from "../../Store/actions";

const AlarmHistory = () => {

  const dispatch = useDispatch();
  const { alarm_history } = useSelector((state) => state.alarmReducer);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Machine", accessor: "machine_name" },
      { Header: "Name", accessor: "alarm_name" },
      { Header: "Description", accessor: "description" },
      {
        Header: "Created At", accessor: "created_at", Cell: (cellProp) => {
          const data = cellProp.cell.row.original;
          return data.created_at.split("T")[0]
        }
      },

    ],[]
  );

  useEffect(() => {
    dispatch(getAlarmHistory())
  }, [])


  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <Card>
          <CardHeader tag={"h3"}>Alarm History</CardHeader>
          <CardBody>
            <Row>
              <Col lg={12}>
                <TableContainer
                  columns={columns}
                  data={alarm_history}
                  customPageSize={15}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default AlarmHistory;
