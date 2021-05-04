import React from 'react';
import { Link } from "react-router-dom";

const Notification = () => {
    return (
      <div className="dropdown-menu noti-menu">
      <h2>notifications</h2>
      <div className="content">
        <h6>today</h6>
        <a href="#">
          <div className="media">
            <div className="user-nm" style={{background: '#78CFFC'}}>
              <p>mc</p>
              <div className="red-dot" style={{background: '#FF0000'}} />
            </div>
            <div className="media-body">
              <p><strong>Margo Carn</strong> Has Invited you to the <strong>Social Stash</strong></p>
            </div>
            <h5>2 min</h5>
          </div>
        </a> <a href="#">
          <div className="media">
            <div className="user-nm" style={{background: '#FFC400'}}>
              <p>mc</p>
              <div className="red-dot" style={{background: '#25DE7B'}} />
            </div>
            <div className="media-body">
              <p><strong>Margo Carn</strong> Has Invited you to the <strong>Social Stash</strong></p>
            </div>
            <h5>2 min</h5>
          </div>
        </a>
        <h6>Monday 25 March 2020</h6>
        <a href="#">
          <div className="media">
            <div className="user-nm" style={{background: '#78CFFC'}}>
              <p>mc</p>
              <div className="red-dot" style={{background: '#FF0000'}} />
            </div>
            <div className="media-body">
              <p><strong>Margo Carn</strong> Has Invited you to the <strong>Social Stash</strong></p>
            </div>
            <h5>2 min</h5>
          </div>
        </a> </div>
      <div className="menu-footer text-center">
       {/* <a href="/notifications" className="pink" >view all</a>  */}
       <Link to="/notifications" className="pink">view all</Link>
       </div>
    </div>
    )
}

export default Notification
