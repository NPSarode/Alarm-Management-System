import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { AddAlarm, UpdateAlarm, getAlarmTypes, getUsers } from "../../Store/actions";
import { useParams } from "react-router-dom";

const AlarmModal = ({ modal, toggle, data, setData }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { alarm_types } = useSelector((state) => state.alarmReducer);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data && data.name,
      description: data && data.description,
      notification_list: data && data.notification_list,
      status: data && data.status || true,
      machine_id: id,
      alarm_type_id: data && data.alarm_type_id,
      value: data && data.value,
      threshold_value: data && data.threshold_value,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      alarm_type_id: Yup.string().required("Alarm Defination Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      if (data.id) {
        dispatch(UpdateAlarm({...values, id: data.id, notification_list: values.notification_list}))
      } else {
        dispatch(AddAlarm({...values, notification_list: values.notification_list}))
      }

      setData({});
      toggle(!modal);
      validation.resetForm();
    },
  });

  useEffect(() => {
    if (alarm_types && !alarm_types.length) dispatch(getAlarmTypes());
  }, [alarm_types]);

  useEffect(() => {
    if (users && !users.length) dispatch(getUsers());
  }, [dispatch, users]);

  return (
    <Modal isOpen={modal} size="lg" centered>
      <ModalHeader
        tag={"h5"}
        toggle={() => {
          toggle(!modal);
          setData({});
        }}
      >
        {data.id ? "Update Alarm" : "Add Alarm"}
      </ModalHeader>
      <ModalBody>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return;
          }}
        >
          <Row>
            <Col lg={4}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Alarm Name</Label>
                <Input
                  type="text"
                  defaultValue={validation.values.name}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.name && validation.errors.name
                      ? true
                      : false
                  }
                  placeholder="Enter Alarm Name..."
                  name="name"
                />
              </div>
              {validation.touched.name && validation.errors.name ? (
                <FormFeedback type="invalid">
                  {validation.errors.name}
                </FormFeedback>
              ) : null}
            </Col>
            <Col lg={8}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Alarm Description</Label>
                <Input
                  type="textarea"
                  rows={1}
                  name="description"
                  defaultValue={validation.values.description}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.description &&
                    validation.errors.description
                      ? true
                      : false
                  }
                  placeholder="Enter Alarm Description..."
                />
              </div>
              {validation.touched.description &&
              validation.errors.description ? (
                <FormFeedback type="invalid">
                  {validation.errors.description}
                </FormFeedback>
              ) : null}
            </Col>
            <Col lg={4}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Alarm Definition</Label>
                <Input
                  type="select"
                  rows={3}
                  name="alarm_type_id"
                  placeholder="Enter Receiver Email ID..."
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.alarm_type_id &&
                    validation.errors.alarm_type_id
                      ? true
                      : false
                  }
                  // defaultValue={validation.values.alarm_type_id}
                >
                  <option defaultValue={null} defaultChecked hidden>
                    Choose Alarm Definition...
                  </option>
                  {alarm_types.map((data, i) => {
                    return (
                      <option value={data.id} key={i} selected={data.id == validation.values.alarm_type_id}>
                        {data.name}
                      </option>
                    );
                  })}
                </Input>
              </div>
              {validation.touched.alarm_type_id &&
              validation.errors.alarm_type_id ? (
                <FormFeedback type="invalid">
                  {validation.errors.alarm_type_id}
                </FormFeedback>
              ) : null}
            </Col>
            <Col lg={4}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Actual Value</Label>
                <Input
                  type="number"
                  name="value"
                  defaultValue={validation.values.value}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.value &&
                    validation.errors.value
                      ? true
                      : false
                  }
                  placeholder="Enter Actual Value..."
                />
              </div>
              {validation.touched.value && validation.errors.value ? (
                <FormFeedback type="invalid">
                  {validation.errors.value}
                </FormFeedback>
              ) : null}
            </Col>
            <Col lg={4}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Threshold Value</Label>
                <Input
                  type="number"
                  name="threshold_value"
                  defaultValue={validation.values.threshold_value}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.threshold_value && validation.errors.threshold_value
                      ? true
                      : false
                  }
                  placeholder="Enter Threshold Value..."
                  disabled={data.id}
                />
              </div>
              {validation.touched.threshold_value && validation.errors.threshold_value ? (
                <FormFeedback type="invalid">
                  {validation.errors.threshold_value}
                </FormFeedback>
              ) : null}
            </Col>
            <Col lg={12}>
              <div className="mb-3 bg bg-secondary p-1 bg-opacity-10">
                <Label>Set Notifications To</Label>
                <Input
                  type="select"
                  name="notification_list"
                  placeholder="Enter Receiver Email ID..."
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.notification_list &&
                    validation.errors.notification_list
                      ? true
                      : false
                  }
                  defaultValue={validation.values.notification_list}
                >
                  <option defaultValue={null} defaultChecked hidden>
                    Choose User...
                  </option>
                  {users.map((data, i) => {
                    return (
                      <option value={data.id} key={i}>
                        {data.full_name}
                      </option>
                    );
                  })}
                </Input>
              </div>
              {validation.touched.notification_list && validation.errors.notification_list ? (
                <FormFeedback type="invalid">
                  {validation.errors.notification_list}
                </FormFeedback>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-end align-items-center">
                <button className="btn btn-sm btn-primary" type="submit">
                  {data.id ? "Update Alarm" : "Add Alarm"}
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AlarmModal;
