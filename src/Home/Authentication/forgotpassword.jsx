
import React, { Component } from 'react';
// import { Helmet } from "react-helmet";

import {AppLogo} from '../../constant/imagepath_home';

class Home extends Component {
   render() {
      return ( 
        <div className="bg-pattern-style">
        <div className="content">
          {/* Account Content */}
          <div className="account-content">
            <div className="account-box">
              <div className="login-right">
                <div className="login-header">
                  <h3>Forgot Password?</h3>
                  <p className="text-muted">Enter your email to get a password reset link</p>
                </div>
                {/* Forgot Password Form */}
                <form action="/login">
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="text-right">
                    <a className="forgot-link" href="/login">Remember your password?</a>
                  </div>
                  <button className="btn btn-primary login-btn" type="submit">Reset Password</button>
                </form>
                {/* /Forgot Password Form */}
              </div>
            </div>
          </div>
          {/* /Account Content */}
        </div>
      </div>
      );
   }
}

export default Home;
