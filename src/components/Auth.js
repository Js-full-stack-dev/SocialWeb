import React, {useState} from 'react';

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../actions/auth";
import FileBase from "react-file-base64";
import FlashMessage from 'react-flash-message';


import * as api from '../api/apis';
import SignupSuccessModal from './AuthModals/SignupSuccessModal';
import ForgotPasswordModal1 from './AuthModals/ForgotPasswordModal1';
import ForgotPasswordModal2 from './AuthModals/ForgotPasswordModal2';
import ForgotPasswordModal3 from './AuthModals/ForgotPasswordModal3';

// const url = 'http://localhost:5000';

// let errorMsg = null


// const Message = () => (
//   <FlashMessage duration={5000} persistOnHover={true}>
//     <strong>Error Message is : {errorMsg}</strong>
//   </FlashMessage>
// )
 
// render(Message, document.body);

const initialFormDataStateSignin = {
  email: '', 
  password: '',
}

const initialFormDataStateSignup = {
  profilePhoto: '',
  firstName: '',
  lastName: '',
  email: '', 
  password: '',
  confirmPassword: ''
}

// let registered = false

const user = JSON.parse(localStorage.getItem('profile'));

const Auth = () => {

  const [showPassword , setShowPassword] = useState ();
  const [isSignup, setIsSignup] = useState(false);
  const [ formData, setFormData] = useState(initialFormDataStateSignin || initialFormDataStateSignup );
  const dispatch = useDispatch(); 
  const history = useHistory();

  const [imageState, setImageState] = useState("images/avatar.png");

  const [iserrorMsg, setisErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [isRegistered, setIsRegistered] = useState(false);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

  const isAuthenticated = () => {
    if (user == null){
      return isRegistered;
      
    }   
    
      }


  const handleChange = (e) => {
          setFormData({...formData, [e.target.name]: e.target.value })
  }
  const handleSubmitSignup = (e) => {
      e.preventDefault();

      setisErrorMsg(false)

 api.signUp(formData)
    .then(({data}) => {
      dispatch({ type: 'AUTH', data });
      history.push('/home');

      setIsRegistered(true)
    })
    .catch(e => {
      // console.log(e.response.data);

      setisErrorMsg(true)
      // errorMsg = e.response.data;
      setErrorMsg(e.response.data.message)
      console.log(e.response.data.message);
      // console.log(`errorMsg`, errorMsg)
    //   <FlashMessage duration={5000} persistOnHover={true}>
    //        <strong>{e.response.data}</strong>
    //  </FlashMessage>

    setIsRegistered(false)
    });



      // dispatch(signup(formData, history))
      // .then(res =>  {
      // //   history.push('/home')
      // //   localStorage.setItem('profile' , JSON.stringify({res}))
      // registered = true
      //  })
        // console.log(`sign up formData`, formData)
  }

  const handleSubmitSignin = (e) => {
    e.preventDefault();

    setisErrorMsg(false)

     api.signIn(formData)
     .then(({data}) => {

       dispatch({ type: 'AUTH', data });
   
       history.push('/home');
      //  registered = true
      setIsRegistered(true)

      
    })
     .catch(e => {
      // console.log(e.response.data);
      setisErrorMsg(true)
      // errorMsg = e.response.data;
      setErrorMsg(e.response.data.message)

      console.log(e.response.data.message)
      
      setIsRegistered(false)
    });
    
    // console.log(`sign in formData`, formData)

    // dispatch(signin(formData, history))
      // .then(res =>  {
      //   history.push('/home')
      //   localStorage.setItem('profile' , JSON.stringify({res}))
      //  })
}



const onImageChange = async (e) => {
  
  let imageFile = e.target.files[0];
  
  if (imageFile) {
    // const reader = new FileReader();
    // reader.onload = handleReaderLoaded.bind(this)
    // reader.readAsBinaryString(imageFile);
    
    // setImageState({
      //   // imageState: URL.createObjectURL(e.target.files[0])
      // });
      const base64 = await convertBase64(imageFile);
      setImageState(base64)
      setFormData({ ...formData, profilePhoto: base64 })
    }
    
    // const preview = document.getElementById('profilePhoto')
  }

const convertBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
  
// const handleReaderLoaded = (readerEvt) => {
//     let binaryString = readerEvt.target.result
//     setImageState({
//     base64TextString: btoa(binaryString)
//     });
//   }

  // const switchMode = () => {setIsSignup((prevIsSignup) => !prevIsSignup)}


  
    return (
        <div>
             <div>
        <section className="login-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="left"> <img src="images/login-logo.png" className="img-fluid" alt="" />
                  <h2>New kind of </h2>
                  <h1>Social Network.</h1>
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="right">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist"> <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</a> <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">register</a> </div>
                  </nav>

{iserrorMsg && 
(
  <FlashMessage duration={10000} persistOnHover={true}>
    <strong>Error Message is : {errorMsg}</strong>
  {/* { setisErrorMsg(false)} */}
  </FlashMessage>
  
)

}
                  {/*  */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form onSubmit={handleSubmitSignin}>
                        <div className="row">
                          <div className="col-12">
                            <label >email<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name="email" type="email" className="form-control" placeholder="Enter Email" />
                          </div>
                          <div className="col-12 position-relative">
                            <label >password<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} type={showPassword ? "text" : "password"} name="password"  className="form-control" placeholder="Enter Password" />
                            <button onClick={handleShowPassword} type="button" className="view-btn">{showPassword ? <i className="far fa-eye" /> : <i class="fa fa-eye-slash" />}</button>
                          </div>
                          <div className="col-12 text-right"> <a href="#" className="fog-pas" data-toggle="modal" data-target=".forgot-modal-1">forgot password?</a> </div>
                          <div className="col-12">
                          <button type="submit" className="gd-btn">Login</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <form onSubmit={handleSubmitSignup}>
                        <div className="row">
                          <div className="col-12">    
                            <div className="attached"> 
                            <img src={ imageState } alt="" />
                            {/* <img src={preview : URL.createObjectURL(e.target.files[0]) } alt="" /> */}

                              <button type="button" className="camera-btn" onClick={() => document.getElementById("profilePhoto").click()} >
                              <i className="fa fa-camera" />

                        <input 
                        id="profilePhoto"
                         style={{display: 'none'}}
                         type="file"
                         multiple={false}
                         onChange={(e) => {onImageChange(e)}}
                         accept=".jpeg, .png, .jpg"
                        //  onDone={({base64}) => setFormData({ ...formData, profilePhoto: base64 })}                    
                         /> 


                              </button>

                            </div>
                          </div>
                        </div>

<br />
{/* 
<button 
                                onClick={ () => this.userimageref.current.click() }
                                className="camera-btn">
                                <i className="fa fa-camera" />

                                <input 
                                  ref="userimageref"
                                  type="file"
                                  // style={{ display: "none" }}
                                  type="file"
                                  multiple={false}
                                  onChange={onImageChange}
                                  // onDone={({ base64 }) =>
                                  //   setFormData({
                                  //     ...formData,
                                  //     profilePhoto: base64,
                                  //   })
                                  // }
                                />
                              </button> */}

                        <div className="row">
                          <div className="col-12 col-md-6">
                            <label  >First Name<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name="firstName" type="text" className="form-control" placeholder="Enter First Name" />
                          </div>
                          <div className="col-12 col-md-6">
                            <label  >Last Name<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name="lastName" type="text" className="form-control" placeholder="Enter Last Name" />
                          </div>
                          <div className="col-12">
                            <label  >email<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name="email" type="email" className="form-control" placeholder="Enter Email" />
                          </div>
                          <div className="col-12 position-relative">
                            <label  >password<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name="password" type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter Password" />
                            <button onClick={handleShowPassword} type="button" className="view-btn">{showPassword ? <i className="far fa-eye" /> : <i class="fa fa-eye-slash" />}</button>
                          </div>
                          <div className="col-12 position-relative">
                            <label  >confirm password<span className="text-danger">*</span>:</label>
                            <input required onChange={handleChange} name ="confirmPassword" type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter Password" />
                            <button onClick={handleShowPassword} type="button" className="view-btn">{showPassword ? <i className="far fa-eye" /> : <i class="fa fa-eye-slash" />}</button>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="gd-btn" data-toggle="modal" data-target=".signup-modal">Register</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*login screen end here*/} 



        {/* signup modal start here */}
{/* {isRegistered &&  <SignupSuccessModal />} */}
        {/* signup modal end here */} 

        {/* forgot-modal-1 start here */}
<ForgotPasswordModal1 />
        {/* forgot-modal-1 end here */} 
        
        {/* forgot-modal-2 start here */}
<ForgotPasswordModal2 />
        {/* forgot-modal-2 end here */} 
        
        {/* forgot-modal-3 start here */}
<ForgotPasswordModal3 />
        {/* forgot-modal-3 end here */}


</div>
</div>
    )
}

export default Auth
