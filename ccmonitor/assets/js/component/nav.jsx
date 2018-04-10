import React from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import api from '../api';
import Login from "./login";
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { CookiesProvider } from 'react-cookie';

function Nav(props) {
  return <header className="header">

    <nav class="navbar navbar-default navbar-inverse" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Ccmonitor</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <CookiesProvider>
            <Login />
          </CookiesProvider>
        </div>
      </div>
    </nav>

  </header>;
}

function state2props(state) {
  return {
    token: state.token,
  };
}
export default connect(state2props)(Nav);
