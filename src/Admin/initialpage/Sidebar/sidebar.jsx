/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
      <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"> 
              <span><i className="fe fe-home" /> Main</span>
            </li>
            <li className={pathname.includes('index') ?"active" :""}> 
              <a href="/admin/index"><span>Dashboard</span></a>
            </li>
            <li className={pathname.includes('mentor') ?"active" :""}> 
              <a href="/admin/mentor"><span>Mentor</span></a>
            </li>
            <li className={pathname.includes('mentee') ?"active" :""}> 
              <a href="/admin/mentee"><span>Mentee</span></a>
            </li>
            <li className={pathname.includes('booking-list') ?"active" :""}> 
              <a href="/admin/booking-list"><span>Booking List</span></a>
            </li>
            <li className={pathname.includes('categories') ?"active" :""}> 
              <a href="/admin/categories"><span>Categories</span></a>
            </li>
            <li className={pathname.includes('transactions-list') ?"active" :""}> 
              <a href="/admin/transactions-list"><span>Transactions</span></a>
            </li>
            <li className={pathname.includes('settings') ?"active" :""}> 
              <a href="/admin/settings"><span>Settings</span></a>
            </li>
            <li className="submenu">
              <a href="#"><span> Reports</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('invoice') ?"active" :""} href="/admin/invoice-report">Invoice Reports</a></li>
              </ul>
            </li>
            <li className="menu-title"> 
              <span><i className="fe fe-document" /> Pages</span>
            </li>
            <li className={pathname.includes('profile') ?"active" :""}> 
              <a href="/admin/profile"><span>My Profile</span></a>
            </li>
            <li className="submenu"> 
              <a href="#"><span>Blog</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('blog_') ?"active" :""} href="/admin/blog_"> Blog </a></li>
                <li><a className={pathname.includes('blog-details') ?"active" :""} href="/admin/blog-details"> Blog Details </a></li>
                <li><a className={pathname.includes('add-blog') ?"active" :""} href="/admin/add-blog"> Add Blog </a></li>
                <li><a className={pathname.includes('edit-blog') ?"active" :""} href="/admin/edit-blog"> Edit Blog </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Authentication </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a href="/admin_login"> Login </a></li>
                <li><a href="/admin_register"> Register </a></li>
                <li><a href="/admin_forgot-password"> Forgot Password </a></li>
                <li><a href="/lock-screen"> Lock Screen </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Error Pages </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a href="/admin/error-404">404 Error </a></li>
                <li><a href="/admin/error-500">500 Error </a></li>
              </ul>
            </li>
            <li className={pathname.includes('blank-page') ?"active" :""}> 
              <a href="/admin/blank-page"><span>Blank Page</span></a>
            </li>
            <li className="menu-title"> 
              <span><i className="fe fe-star-o" /> UI Interface</span>
            </li>
            <li className={pathname.includes('components') ?"active" :""}> 
              <a href="/admin/components"><span>Components</span></a>
            </li>
            <li className="submenu">
              <a href="#"><span> Forms </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('form-basic-inputs') ?"active" :""} href="/admin/form-basic-inputs">Basic Inputs </a></li>
                <li><a className={pathname.includes('form-input-groups') ?"active" :""} href="/admin/form-input-groups">Input Groups </a></li>
                <li><a className={pathname.includes('form-horizontal') ?"active" :""} href="/admin/form-horizontal">Horizontal Form </a></li>
                <li><a className={pathname.includes('form-vertical') ?"active" :""} href="/admin/form-vertical"> Vertical Form </a></li>
                <li><a className={pathname.includes('form-mask') ?"active" :""} href="/admin/form-mask"> Form Mask </a></li>
                <li><a  className={pathname.includes('form-validation') ?"active" :""}href="/admin/form-validation"> Form Validation </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><span> Tables </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('tables-basic') ?"active" :""} href="/admin/tables-basic">Basic Tables </a></li>
                <li><a className={pathname.includes('data-tables') ?"active" :""} href="/admin/data-tables">Data Table </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href=""><span>Multi Level</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li className="submenu">
                  <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                  <ul style={{display: 'none'}}>
                    <li><a href=""><span>Level 2</span></a></li>
                    <li className="submenu">
                      <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                      <ul style={{display: 'none'}}>
                        <li><a href="">Level 3</a></li>
                        <li><a href="">Level 3</a></li>
                      </ul>
                    </li>
                    <li><a href=""> <span>Level 2</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href=""> <span>Level 1</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      );
   }
}

export default withRouter(Sidebar);
