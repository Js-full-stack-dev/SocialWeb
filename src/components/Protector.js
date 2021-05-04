import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const Protector = ({component: Component, ...rest}) => {

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Route {...rest} 
      render={(log) => {
        // if (Auth.isAuthenticated()) { 
        //   return <Component {...log} />;
        // } else {
        //   return (
        //     <Redirect to={{ pathname: "/", state: { from: log.location } }} />
        //   );
        // }
        localStorage.getItem("profile") ? (
          <Component {...log} />
        ) : (
          <Redirect to="/" />
        )
      }} />
  );
};

export default Protector;