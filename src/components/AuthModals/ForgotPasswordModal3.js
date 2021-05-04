import React,{useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import * as api from '../../api/apis';
import FlashMessage from 'react-flash-message';
import axios from 'axios';

const ForgotPasswordModal3 = ({email}) => {

  const history = useHistory();
  const [ formData, setFormData] = useState("");
  const [iserrorMsg, setisErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword , setShowPassword] = useState ();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setisErrorMsg(false)

    api.forgotPassword3(formData)
    .then((res) => {
     console.log(`formData`, formData)

     history.push('/')
     
   })
    .catch(e => {
     setisErrorMsg(true)
     setErrorMsg(e.response?.data?.message)
   });
   
  }
    return (
        <div className="modal fade forgot-modal-3 forgot-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Password Recovery</h2>
                  </div>
                </div>

{iserrorMsg && 
(
  <FlashMessage duration={5000} persistOnHover={true}>
    <strong>Error Message: {errorMsg}</strong>
  {/* { setisErrorMsg(false)} */}
  </FlashMessage>  
)
}
                <form onSubmit={handleSubmit}> 
                  <div className="row">
                    <div className="col-12">
                      <label>password<span className="text-danger">*</span>:</label>
                      <input onChange={handleChange} name="password" type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter Password" />
                      <button onClick={handleShowPassword} type="button" className="view-btn">{showPassword ? <i className="far fa-eye" /> : <i class="fa fa-eye-slash" />}</button>
                    </div>
                    <div className="col-12">
                      <label>confirm password<span className="text-danger">*</span>:</label>
                      <input onChange={handleChange} name="confirmPassword" type={showPassword ? "text" : "password"} className="form-control" placeholder="confirm Password" />
                      <button onClick={handleShowPassword} type="button" className="view-btn">{showPassword ? <i className="far fa-eye" /> : <i class="fa fa-eye-slash" />}</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-sm-flex justify-content-between align-items-center">
                      <button type="submit" className="gd-btn order-sm-2">update</button>
                      <a href="/" className="back order-sm-1"><i className="fa fa-long-arrow-alt-left" />back to login</a> 
                      {/* <Link to="/" className="back order-sm-1"><i className="fa fa-long-arrow-alt-left" /> back to login</Link> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
    )
}

export default ForgotPasswordModal3
