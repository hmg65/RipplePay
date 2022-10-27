import React from "react";
import { Link, useNavigate } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import NavLogo from "../images/Ripple_Logo.svg";

const NewAccount = () => {
const navigate = useNavigate();

const proceedToLogin = () => {
  navigate("/");
}

  return (

  <div>

    {/* ----------Navbar---------- */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <Link className="navbar-brand d-flex align-items-center ms-1" to="/">
        <img src={NavLogo} className="rounded nav_logo me-1"/>
        TRON Pay
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-item nav-link me-2" to="/">Login</Link>
        </div>
      </div>
    </nav>


    {/* display data coming from signup form Name, email, vra, seed */}
    <div class="d-flex flex-column gap-4 ms-4  me-4 mt-4">
      <div class="card">
        <div class="card-header border border-0 fw-bold">
          Name:
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Hemant Gupta</p>
          </blockquote>
        </div>
      </div>

      <div class="card">
        <div class="card-header border border-0 fw-bold">
          Email:
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>tempmail@gmail.com</p>
          </blockquote>
        </div>
      </div>

      <div class="card">
        <div class="card-header border border-0 fw-bold">
          VRA:
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>tempvra</p>
          </blockquote>
        </div>
      </div>

      <div class="card">
        <div class="card-header border border-0 fw-bold">
          Seed:
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>tempseed</p>
          </blockquote>
        </div>
      </div>

    </div>

    <div className="text-center mt-4">
      <button type="button" class="btn btn-dark" onClick={proceedToLogin}>Proceed to Login</button>
    </div>
	</div>
    )
};

export default NewAccount;