import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {AppLogo,USER} from '../constant/imagepath_home';

class Header extends Component {
	render(){
		const {  location } = this.props
		let pathname = location.pathname
		let mentorarray = ["dashboard","Mentor/bookings"]
	return (
		<header className="header">
			<div className="header-fixed">
				<nav className="navbar navbar-expand-lg header-nav">
				<div className="navbar-header">
				<a id="mobile_btn" href="">
					<span className="bar-icon">
					<span />
					<span />
					<span />
					</span>
				</a>
				<a href="/app/index" className="navbar-brand logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
				</a>
				</div>
				<div className="main-menu-wrapper">
				<div className="menu-header">
					<a href="/app/index" className="menu-logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
					</a>
					<a id="menu_close" className="menu-close" href="">
					<i className="fas fa-times" />
					</a>
				</div>
				<ul className="main-nav">
					<li className={pathname.includes('index') ?"active" :""} >
					<a href="/app/index">Home</a>
					</li>
					<li className={pathname.includes('/Mentor/dashboard') || pathname.includes('Mentor/bookings') ||pathname.includes('schedule-timings')
						 ||pathname.includes('/Mentor/chat')||pathname.includes('invoice')||pathname.includes('reviews')||pathname.includes('/Mentor/blog') 
						 ||pathname.includes('/Mentor/profile-settings')||pathname.includes('mentor-register') ||
						 pathname.includes('profile-mentee') ||pathname.includes('mentee-list') ||
						 pathname.includes('add-blog') ||pathname.includes('edit-blog')  ?"has-submenu active" :"has-submenu"}>
					<a href="">Mentor <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('/Mentor/dashboard') ?"active" :""}><a href="/app/Mentor/dashboard">Mentor Dashboard</a></li>
						<li className={pathname.includes('Mentor/bookings') ?"active" :""}><a href="/app/Mentor/bookings">Bookings</a></li>
						<li className={pathname.includes('schedule-timings') ?"active" :""}><a href="/app/Mentor/schedule-timings">Schedule Timing</a></li>
						<li className={pathname.includes('mentee-list') ?"active" :""}><a href="/app/Mentor/mentee-list">Mentee List</a></li>
						<li className={pathname.includes('profile-mentee') ?"active" :""}><a href="/app/Mentor/profile-mentee">Mentee Profile</a></li>
						<li className={pathname.includes('/Mentor/blog') || pathname.includes('add-blog') 
							||pathname.includes('edit-blog') ?"has-submenu active" :"has-submenu"}>
						<a href="/app/Mentor/blog">Blog</a>
						<ul className="submenu">
							<li className={pathname.includes('/Mentor/blog') ?"active" :""}><a href="/app/Mentor/blog">Blog</a></li>
							<li><a href="/app/Blog/blog-details">Blog View</a></li>
							<li className={pathname.includes('add-blog') ?"active" :""}><a href="/app/Mentor/add-blog">Add Blog</a></li>
							<li className={pathname.includes('edit-blog') ?"active" :""}><a href="/app/Mentor/edit-blog">Edit Blog</a></li>
						</ul>
						</li>
						<li className={pathname.includes('/Mentor/chat') ?"active" :""}><a href="/app/Mentor/chat">Chat</a></li>
						<li className={pathname.includes('invoice') ?"active" :""}><a href="/app/Mentor/invoices">Invoices</a></li>
						<li className={pathname.includes('/Mentor/profile-settings') ?"active" :""}><a href="/app/Mentor/profile-settings">Profile Settings</a></li>
						<li className={pathname.includes('reviews') ?"active" :""}><a href="/app/Mentor/reviews">Reviews</a></li>
						<li className={pathname.includes('mentor-register') ?"active" :""}><a href="/app/Mentor/mentor-register">Mentor Register</a></li>
					</ul>
					</li>	
					<li className={pathname.includes('mentor-profile') || pathname.includes('checkout') ||
					pathname.includes('booking-success')|| pathname.includes('map-grid')|| pathname.includes('map-list')
					 || pathname.includes('search') ||pathname.includes('bookings-mentee') || pathname.includes('dashboard-mentee') ||
					 pathname.includes('favourites') || pathname.includes('Mentee/chat-mentee') || pathname.includes('profile-settings-mentee')||
					 pathname.includes('change-password') ?"has-submenu active" :"has-submenu"}>
					<a href="">Mentee <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('map-grid') || pathname.includes('map-list') 
						  ?"has-submenu active" :"has-submenu"}>
						<a href="#">Mentors</a>
						<ul className="submenu">
							<li className={pathname.includes('map-grid') ?"active" :""}><a href="/app/Mentee/map-grid">Map Grid</a></li>
							<li className={pathname.includes('map-list') ?"active" :""}><a href="/app/Mentee/map-list">Map List</a></li>
						</ul>
						</li>
						<li className={pathname.includes('search') ?"active" :""}><a href="/app/Mentee/search">Search Mentor</a></li>
						<li className={pathname.includes('mentor-profile') ?"active" :""}><a href="/app/Mentee/mentor-profile">Mentor Profile</a></li>
						<li className={pathname.includes('bookings-mentee') ?"active" :""}><a href="/app/Mentee/bookings-mentee">Bookings</a></li>
						<li className={pathname.includes('checkout') ?"active" :""}><a href="/app/Mentee/checkout">Checkout</a></li>
						<li className={pathname.includes('booking-success') ?"active" :""}><a href="/app/Mentee/booking-success">Booking Success</a></li>
						<li className={pathname.includes('dashboard-mentee') ?"active" :""}><a href="/app/Mentee/dashboard-mentee">Mentee Dashboard</a></li>
						<li className={pathname.includes('favourites') ?"active" :""} ><a href="/app/Mentee/favourites">Favourites</a></li>
						<li className={pathname.includes('Mentee/chat-mentee') ?"active" :""}><a href="/app/Mentee/chat-mentee">Chat</a></li>
						<li className={pathname.includes('profile-settings-mentee') ?"active" :""}><a href="/app/Mentee/profile-settings-mentee">Profile Settings</a></li>
						<li className={pathname.includes('change-password') ?"active" :""}><a href="/app/Mentee/change-password">Change Password</a></li>
					</ul>
					</li>	
					<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					<a href="">Pages <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('voice-call') ?"active" :""}><a href="/app/Pages/voice-call">Voice Call</a></li>
						<li className={pathname.includes('video-call') ?"active" :""}><a href="/app/Pages/video-call">Video Call</a></li>
						<li><a href="/app/Mentee/search">Search Mentors</a></li>
						<li className={pathname.includes('components') ?"active" :""}><a href="/app/Pages/components">Components</a></li>
						<li className="has-submenu">
						<a href="/app/Mentor/invoices">Invoices</a>
						<ul className="submenu">
							<li><a href="/app/Mentor/invoices">Invoices</a></li>
							<li><a href="/app/Mentor/invoice-view">Invoice View</a></li>
						</ul>
						</li>
						<li className={pathname.includes('blank-page') ?"active" :""}><a href="/app/Pages/blank-page">Starter Page</a></li>
						<li><a href="/login">Login</a></li>
						<li><a href="/register">Register</a></li>
						<li><a href="/forgot-password">Forgot Password</a></li>
					</ul>
					</li>
					<li className={pathname.includes('blog-list') || pathname.includes('blog-grid') ||
					pathname.includes('blog-details') ?"has-submenu active" :"has-submenu"}>
					<a href="">Blog <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('blog-list') ?"active" :""}><a href="/app/Blog/blog-list">Blog List</a></li>
						<li className={pathname.includes('blog-grid') ?"active" :""}><a href="/app/Blog/blog-grid">Blog Grid</a></li>
						<li className={pathname.includes('blog-details') ?"active" :""}><a href="/app/Blog/blog-details">Blog Details</a></li>
					</ul>
					</li>
					<li>
					<a href="/admin/index" target="_blank">Admin</a>
					</li>
					<li className="login-link">
					<a href="/login">Login / Signup</a>
					</li>
				</ul>		 
				</div>		 
				{location.pathname.includes("p/index") ? <ul className="nav header-navbar-rht">
					<li className="nav-item">
						<a className="nav-link" href="/login">Login</a>
					</li>
					<li className="nav-item">
						<a className="nav-link header-login" href="/register">Register</a>
					</li>
				</ul> :
				<ul className="nav header-navbar-rht">
					{/* User Menu */}
					<li className="nav-item dropdown has-arrow logged-item">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<span className="user-img">
						<img className="rounded-circle" src={USER} width={31} alt="Darren Elder" />
						</span>
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<div className="user-header">
						<div className="avatar avatar-sm">
							<img src={USER} alt="User Image" className="avatar-img rounded-circle" />
						</div>
						<div className="user-text">
							<h6>Jonathan Doe</h6>
							<p className="text-muted mb-0">Mentor</p>
						</div>
						</div>
						<a className="dropdown-item" href="/app/Mentor/dashboard">Dashboard</a>
						<a className="dropdown-item" href="/app/Mentor/profile-settings">Profile Settings</a>
						<a className="dropdown-item" href="/login">Logout</a>
					</div>
					</li>
					{/* /User Menu */}
				</ul> }
			</nav>
			</div>
		</header>
  	);
}
		
}
 
 
export default withRouter(Header);