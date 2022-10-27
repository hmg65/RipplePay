import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Modal, Button, Spinner, InputGroup } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import UserDataService from "../services/user.services";
import FaceRegister from "./FaceRegister";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import RippleLogo from "../images/Ripple_Logo.svg";
import InfoIcon from "../images/info_icon.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [VRA, setVRA] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [seed, setSeed] = useState("");
  const { signUp } = useUserAuth();

  const dateCreated = new Date().toISOString();

  // Signup form submission handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    //Form is empty or not
    if (firstName === "" || lastName === "" || email === "" || VRA === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }

    setLoading(true);
    setMessage({ error: false, msg: "Capture image to proceed further" });
    handleShow();
  };

  //Spinner states
  const [loading, setLoading] = useState(false);

  // ----------Modal states----------
  const [show, setShow] = useState(false);
  const [modalCloseButton, setModalCloseButton] = useState(false);

  //close face capture modal
  function handleClose() {
    setShow(false);
    setLoading(false);
  }

  //open face capture modal
  const handleShow = () => setShow(true);

  //disable close button of face capture modal
  function disableModalCloseButton() {
    setModalCloseButton(true);
  }

  //enable close button of face capture modal
  function enableModalCloseButton() {
    setModalCloseButton(false);
  }

  const navigate = useNavigate();

  // new signup button
  const newSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    //Form is empty or not
    if (firstName === "" || lastName === "" || email === "" || VRA === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }

    setLoading(true);
    setMessage({ error: false, msg: "Capture image to proceed further" });
    handleShow();
  };

  return (
    <div>
      {/* Navbar start*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <Link
          className="navbar-brand d-flex align-items-center ms-1"
          to="/signup"
        >
          <img src={RippleLogo} className="rounded nav_logo me-1" />
          TRON Pay
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link me-2" to="/">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* ----------Signup Card----------  */}

      <section className="vh-100">
        <div className="container h-100 ">
          <div className="row justify-content-center align-items-centre h-100">
            <div className="col-md-auto d-flex justify-content-center align-items-center">
              <div className="bg-transparent border border-0 card">
                <div className="card-body m-auto text-center d-flex flex-column float-left">
                  <div>
                    <h3 className="float-left fw-bold fs-3">Sign up</h3>
                  </div>

                  {message?.msg && (
                    <Alert
                      variant={message?.error ? "danger" : "success"}
                      dismissible
                      onClose={() => {
                        setMessage("");
                      }}
                    >
                      {message?.msg}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} className=" pt-2 m-auto">
                    <div className="">
                      <div className="d-flex float-left fw-bold">
                        <label className="form-label pt-2 ">First Name</label>
                      </div>

                      <Form.Group controlId="formFirstName">
                        <Form.Control
                          className="border-dark border-1 p-2 form-control-lg"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="">
                      <div className="d-flex float-left fw-bold">
                        <label className="form-label pt-4">Last Name</label>
                      </div>

                      <Form.Group controlId="formLastName">
                        <Form.Control
                          className="border-dark border-1 p-2 form-control-lg"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="">
                      <div className="d-flex float-left fw-bold">
                        <label className="form-label pt-4">Email address</label>
                      </div>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          className="border-dark border-1 p-2 form-control-lg"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="">
                      <div className="d-flex float-left fw-bold">
                        <label className="form-label pt-4">VRA</label>
                        <span className="pt-4">
                          <OverlayTrigger
                            placement="right"
                            overlay={
                              <Tooltip id="button-tooltip-2">
                                Virtual Tron Address
                              </Tooltip>
                            }
                          >
                            {({ ref, ...triggerHandler }) => (
                              <Button
                                variant=""
                                bg="transparent"
                                {...triggerHandler}
                                className="d-inline-flex align-items-center border border-0"
                              >
                                <img ref={ref} roundedCircle src={InfoIcon} />
                              </Button>
                            )}
                          </OverlayTrigger>
                        </span>
                      </div>

                      <InputGroup className="mb-3">
                        <Form.Control
                          className="border-dark border-1 p-2 form-control-lg"
                          type="number"
                          value = {VRA}
                          onChange= { (e) => setVRA(e.target.value)}
                        />
                        <InputGroup.Text id="basic-addon0">@xrp</InputGroup.Text>
                      </InputGroup>
                    </div>

                    {/* <div className="">
                      <div className="d-flex float-left fw-bold">
                        <label className="form-label pt-4">
                          Enter Seed (If you want to link existing Ripple
                          wallet)
                        </label>
                      </div>

                      <Form.Group controlId="formBasicSeed">
                        <Form.Control
                          className="border-dark border-1 p-2 form-control-lg"
                          type="number"
                          onChange={(e) => setSeed(e.target.value)}
                        />
                      </Form.Group>
                    </div> */}

                    <div className="d-flex flex-row justify-content-center mt-2">
                      <div>
                        {loading ? (
                          <Spinner animation="border" className="mt-2" />
                        ) : (
                          <button
                            className="btn btn-dark btn-md btn-block"
                            type="submit"
                          >
                            Sign up{" "}
                          </button>
                        )}
                      </div>
                    </div>

                    <span className="d-none d-md-block d-lg-block d-xl-block">
                      __________________________________________________
                    </span>

                    <div className="mt-2">
                      Already have an account? <Link to="/">Log In</Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------Signup Card----------  */}

      {/* ----------Modal---------- */}
      <Modal
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>
            <div className="text-center">
              <p className="text-center">Capture Image</p>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FaceRegister
            email={email}
            firstName={firstName}
            lastName={lastName}
            VRA={VRA}
            seed = {seed}
            disableModalCloseButton={disableModalCloseButton}
            enableModalCloseButton={enableModalCloseButton}
          />
        </Modal.Body>

        <Modal.Footer>
          {modalCloseButton ? (
            <Button className="btn btn-dark" disabled>
              Close
            </Button>
          ) : (
            <Button className="btn btn-dark" onClick={handleClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signup;
