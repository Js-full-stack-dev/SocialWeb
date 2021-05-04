import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const BasicDetails = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <div>
              <form>
                      <div className="basic-details box">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <label ><i className="fa fa-user" />name:</label>
                            <p>{user.result.name || user.name}</p>
                          </div>
                          {/* <div className="col-md-6 col-12">
                            <label ><i className="fa fa-user" />last name:</label>
                            <p>Carson</p>
                          </div> */}
                          <div className="col-md-6 col-12">
                            <label  ><i className="fa fa-envelope" />email:</label>
                            <p>{user.result.email}</p>
                          </div>
                          <div className="col-12">
                            <Link to="/editbasicinfo" className="gd-btn" id>edit</Link>
                          </div>
                        </div>
                      </div>
                    </form>
        </div>
    )
}

export default BasicDetails
