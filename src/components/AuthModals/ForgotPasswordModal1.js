import React, {useState} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import * as api from '../../api/apis';
import FlashMessage from 'react-flash-message';

const ForgotPasswordModal1 = () => {

  const [ formData, setFormData] = useState("");
  const [iserrorMsg, setisErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  // const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  let nextModal = false;
  
  const handleSubmit = (e) => {
      e.preventDefault();

      // return;
  
    setisErrorMsg(false)
  
    api.forgotPassword1(formData)
    .then(({res}) => {
      // dispatch({ type: 'AUTH', data });
      // history.push('/home');
      //  setIsRegistered(true)

      // document.getElementById('.forgot-modal-1').modal('hide');
      // document.getElementById('.forgot-modal-2').modal('show');


      nextModal = true
      console.log(`nextModal`, nextModal)
  
  
  if(res.status = 200){
    // document.getElementById('.forgot-modal-2').modal('hide');
    // document.getElementById('.forgot-modal-3').modal('show'); 
   }
   else{
     nextModal = false
     console.log(`nextModal`, nextModal)
    //  document.getElementById('.forgot-modal-2').modal('show');
  }

     
   })
    .catch(e => {
     setisErrorMsg(true)
     setErrorMsg(e.response?.data?.message)
    //  setIsRegistered(false)
   });
   
  }

    return (
 
        <div className="modal fade forgot-modal-1 forgot-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                      <label>email<span className="text-danger">*</span>:</label>
                      <input name="email" onChange={handleChange} type="email" required className="form-control" placeholder="Enter Email" />

                      <div className="d-sm-flex justify-content-between align-items-center">
                      
            { nextModal &&  
                        <button type="submit" className="gd-btn order-sm-2" id="forgot-modal-1">
                        <a href="#" className="fog-pas" data-toggle="modal" data-target=".forgot-modal-2">Next</a> 
                        </button>  }
                        
                        

                        



                        <a href="/" className="back order-sm-1"><i className="fa fa-long-arrow-alt-left" />back to login</a> 
                        {/* <Link to="/" className="back order-sm-1"><i className="fa fa-long-arrow-alt-left" />back to login</Link>  */}
                        </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 

    )
}

export default ForgotPasswordModal1
