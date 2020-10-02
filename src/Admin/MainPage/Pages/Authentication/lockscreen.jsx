/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import {headerlogo,AVATAR_12} from '../../../imagepath'

class Lockscreen extends Component {

   render() {     
      return (
      <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img className="img-fluid" src={headerlogo} alt="Logo" />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <div className="lock-user">
                  <img className="rounded-circle" src={AVATAR_12} alt="User Image" />
                  <h4>Allen Davis</h4>
                </div>
                {/* Form */}
                <form action="/admin/index">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Password" />
                  </div>
                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" type="submit">Enter</button>
                  </div>
                </form>
                {/* /Form */}
                <div className="text-center dont-have">Sign in as a different user? <a href="/admin_login">Login</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
   }
}

export default Lockscreen;
