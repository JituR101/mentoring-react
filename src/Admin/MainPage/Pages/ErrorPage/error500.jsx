/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Error500 extends Component {

    render() {
     
      return (
        <div className="main-wrapper">
            <Helmet>
                <title>Mentoring - Error 500</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
        <div className="error-box">
          <h1>500</h1>
          <h3><i className="fa fa-warning" /> Oops! Something went wrong</h3>
          <p>The page you requested was not found.</p>
          <a onclick={()=>localStorage.setItem("firstload","true")} href="/admin/index" className="btn btn-primary">Back to Home</a>
        </div>
      </div>

        
      );
   }
}

export default Error500;
