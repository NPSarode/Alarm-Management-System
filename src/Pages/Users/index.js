import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import TableContainer from "../../Components/TableContainer";
import UserModal from "./UserModal";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Store/actions";

const Users = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      {
        Header: "User Name",
        accessor: "first_name",
        Cell: (cellProp) => {
          const data = cellProp.cell.row.original;

          return data.first_name + " " + data.last_name;
        },
      },
      { Header: "Email ID", accessor: "email" },
      { Header: "Created At", accessor: "created_at", Cell: (cellProp) => {
        const data = cellProp.cell.row.original;

        return data.created_at.split("T")[0]
      } },
      { Header: "Status", accessor: "status", Cell: (cellProp) => {
        const data = cellProp.cell.row.original;
        return <span className={` rounded d-flex justify-content-center align-items-center bg bg-opacity-25 border ${data.status ? 'bg-success text-success border-success' : 'bg-danger text-danger border-danger'}`}>{data.status ? 'Active' : 'Inactive'}</span>
      } },
      // {
      //   Header: "Actions",
      //   accessor: "",
      //   Cell: (cellProp) => {
      //     // const data = cellProp.cell.row.original

      //     return (
      //       <div className="d-flex justify-content-center align-items-center">
      //         <EditLinkMedium />
      //       </div>
      //     );
      //   },
      // },
    ],
    []
  );

  useEffect(() => {
    if (users && !users.length) 
      dispatch(getUsers());
  }, [dispatch, users]);

  console.log(users);

  return (
    <React.Fragment>
      <Container fluid className="p-0">
        <Card>
          <CardHeader tag={"h3"}>User List</CardHeader>
          <CardBody>
            <Row>
              <Col lg={12} className="d-flex ">
                <div className="d-flex justify-content-start align-items-center w-50">
                  {/* <Button
                                        size='sm'
                                        color='primary'
                                        onClick={() => {
                                            navigate(-1)
                                        }}>
                                        <i class='bx bx-arrow-back me-1'></i>
                                        Back
                                    </Button> */}
                </div>
                <div className="d-flex justify-content-end align-items-center w-50">
                  <Button
                    size="sm"
                    color="primary"
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    Add User
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <TableContainer
                  columns={columns}
                  data={users}
                  customPageSize={10}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
      {modal && <UserModal modal={modal} toggle={setModal} />}
    </React.Fragment>
  );
};

export default Users;
