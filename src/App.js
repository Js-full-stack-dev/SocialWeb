import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
// import { getIsLoggedIn } from 'utils';

import Auth from "./components/Auth";
import Home from "./components/Home";
import MyAccount from './components/MyAccount/MyAccount';
import EditMyAccountIntro from './components/MyAccount/EditMyAccountIntro';
import EditBasicInfo from './components/MyAccount/EditBasicInfo';
import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import AllChannels from './components/Channels/AllChannels';
import AllFriendsReq from './components/Header/Friend/AllFriendsReq';
import AllNotifications from './components/Header/Notification/AllNotifications';
import Chat from './components/Header/Chat/Chat';
import Protector from "./components/Protector";
import ForgotPasswordModal1 from './components/AuthModals/ForgotPasswordModal1';
import ForgotPasswordModal2 from './components/AuthModals/ForgotPasswordModal2';
import ForgotPasswordModal3 from './components/AuthModals/ForgotPasswordModal3';
import Intro from './components/MyAccount/Intro';
import Photos from './components/NewsFeed/Photos';
// import {isAuthenticated} from "./components/AuthCheck"

// const requireLogin = (to, from, next) => {
//   if (to.meta.auth) {
//     if (isAuthenticated()) {
//       next();
//     }
//     next.redirect('/');
//   } else {
//     next();
//   }
// };

// const isAuthenticated = (to, from, next) => {
//   const user = JSON.parse(localStorage.getItem('profile'));
//   if(user == null){
//     next.redirect('/');
//   }else{
//     return true;
//   }
// }

function App() {

  // const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <div>
    <BrowserRouter>
    {/* {
      user?.result ? (
     <Switch>
        <div>
        <Protector exact path="/home" component={Home} />
        <Route path="/myaccount" exact component={MyAccount} />
        <Route path="/editmyaccountintro" exact component={EditMyAccountIntro} />
        <Route path="/editbasicinfo" exact component={EditBasicInfo} />
        <Route path="/newsfeed" exact component={NewsFeed} />
        <Route path="/friendrequest" exact component={AllFriendsReq} />
        <Route path="/notifications" exact component={AllNotifications} />
        <Route path="/viewallchannels" exact component={AllChannels} />
        <Route path="/chat" exact component={Chat} />     
        </div>  
     </Switch>
      ) : (
        <Route path="/" exact component={Auth} />  
      )
     } */}
     {/* <GuardProvider guards={[isAuthenticated]} > */}
     <Switch>
        <Route path="/" exact component={Auth} />    
        {/* <Route path="/fpm1"  component={ForgotPasswordModal1} />        
        <Route path="/fpm2"  component={ForgotPasswordModal2} />        
        <Route path="/fpm3"  component={ForgotPasswordModal3} />         */}
        <div>
        <Header />
        {/* <GuardedRoute  exact path="/home" component={Home} /> */}
        {/* <Protector path="/home" component={Home} /> */}
        <Route exact path="/home" component={Home} />
        <Route path="/myaccount" exact component={MyAccount} />
        <Route path="/editmyaccountintro" exact component={EditMyAccountIntro} />
        <Route path="/myaccountintro" exact component={Intro} />
        <Route path="/editbasicinfo" exact component={EditBasicInfo} />
        <Route path="/newsfeed" exact component={NewsFeed} />
        <Route path="/friendrequest" exact component={AllFriendsReq} />
        <Route path="/notifications" exact component={AllNotifications} />
        <Route path="/viewallchannels" exact component={AllChannels} />
        <Route path="/chat" exact component={Chat} />        
        <Route path="/photo" exact component={Photos} />        
        </div>
     </Switch>
     {/* </GuardProvider> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
