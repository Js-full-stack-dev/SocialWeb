import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import Notification from './Notification/Notification';
import FriendReq from './Friend/FriendReq';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  


  useEffect(() => {
    const token = user?.token;

    if(token){
const decodedToken = decode(token);
if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))

 }, [location])

 const logout = () => {
     dispatch({ type : 'LOGOUT'});

     history.push('/')

     setUser(null);
 }

    return (
        <div>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <div className="left-menu">
                  <ul>
                    <li><Link to="/home" className="logo"><img src="images/logo.png" className alt="" /></Link></li>
                    {/* <li>
                      <form action>
                        <div className="search-bar">
                          <input type="search" className="form-control" placeholder="search" />
                          <button type="submit" className="search"><i className="fa fa-search" /></button>
                        </div>
                      </form>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="right-menu">
                  <ul>
                    <li className="dropdown dropdown-user nav-item frnd-menu"> <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown"> <img src="images/frnd.png" className alt="" /></a>
                    <FriendReq /> 
                    </li>
                    <li>
                    {/* <a href="/chat"><img src="images/chat.png" className alt="" /></a> */}
                    <Link to="/chat"><img src="images/chat.png" className alt="" /></Link>
                    </li>
                    <li className="dropdown dropdown-user nav-item noti-main"> <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><img src="images/noti.png" className alt="" /></a>
                     <Notification />
                    </li>
                    
                    <li className="dropdown dropdown-user nav-item last-menu">
                     <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> 
                     <span className="avatar avatar-online"> <img src={user?.result.profilePhoto  ? user?.result.profilePhoto : "images/avatar.png"}  alt="avatar" /> </span> 
                     <span className="user-name">{user.result.name}</span> </a>
                    
                      <div className="dropdown-menu dropdown-menu-right"> 
                      <Link className="dropdown-item" to="/myaccount"><i className="fa fa-cog" />my account</Link>
                      {/* <a className="dropdown-item" href="/myaccount"><i className="fa fa-cog" />my account</a>  */}

                      <Link className="dropdown-item" to="/newsfeed"><i className="fa fa-newspaper" />newsfeed</Link>
                      {/* <a className="dropdown-item" href="/newsfeed"><i className="fa fa-newspaper" />newsfeed</a> */}
                      {/* <a className="dropdown-item" onClick={logout}><i className="fa fa-sign-out" />Logout</a> */}
                      <button color="danger" className="dropdown-item" onClick={logout}><i className="fa fa-sign-out" />Logout</button>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>            
        </div>
    )
}

export default Header
