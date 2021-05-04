import React,{useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { profileUpdate } from "../../actions/auth";
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';
import * as api from '../../api/apis';
import EditCoverAndProfilePhoto from './EditCoverAndProfilePhoto';


const EditBasicInfo = () => {

const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [imageState, setImageState] = useState(user.result.profilePhoto);
  const [coverPhotoState, setCoverPhotoState ] = useState("images/frnd-cover.png")

  // const [Data, setData] = useState([])

  const [EditState, setEditState] = useState({
    // name: user.result.name,
    // profilePhoto: user.result.profilePhoto,
    // coverPhoto: user.result.coverPhoto
  })

//   useEffect(() => {
//     axios.patch("http://localhost:5000/user/updateProfile", EditState)
//     .then(res=>{
//       // const res;
//       // setData(response)
//       // setEditState(res.data)
//     })
// })



 
  // const dispatch = useDispatch();

const handlesubmit = (e) => {
  e.preventDefault();

  // dispatch(profileUpdate({...EditState}));    

  api.profileUpdate(
    user.result._id,
     EditState)


  console.log(`basic Edit State`, EditState, user.result._id);

      // setUser( localStorage.setItem('profile' , JSON.stringify({EditState})));
    //  setUser( appendToStorage("profile", JSON.stringify({EditState})))

    // localStorage.setItem("profile", localStorage.getItem("profile") + EditState);

    updateProfile (EditState) 

      history.push("/myaccount");
}

function updateProfile (EditState)  {
  const profile = {
      ...JSON.parse(localStorage.getItem('profile')),
      ...EditState
  };
  localStorage.setItem('profile', JSON.stringify(profile));
}


const handleChange = (e) => {
  setEditState({...EditState, [e.target.name]: e.target.value })
}

// const onImageChange = async (e) => {
  
//   let imageFile = e.target.files[0];
  
//   if (imageFile) {
//       const base64 = await convertBase64(imageFile);
//       setImageState(base64)
//       setEditState({ ...EditState, profilePhoto: base64 })
//     }
//   }

// const convertBase64 = (imageFile) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(imageFile);

//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };

//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }

    return (
        <div>
      <section className="friend-request-profile"> 
        {/*my-account-top start here*/}
        <div className="frnd-req-profile-top my-account-info-top">
          <div className="wrapper">

<EditCoverAndProfilePhoto />

            {/* <div className="row">
              <div className="col-12">
                <div className="frnd-cover"> <img src=
                {coverPhotoState}
                // {user?.result.profilePhoto}
                // {user?.result  ? user?.result.coverPhoto : "images/frnd-cover.png"} 
                 className="img-fluid" alt="" /> </div>
              </div>
            </div>
            <div className="frnd-profile-info">
              <div className="row">
                <div className="col-12 text-right">
                  <div className="profile-img"> <img src={imageState} className="img-fluid" alt="" />
                    <label name="my-account-img"> <i className="fa fa-camera" />
                    <input 
                        id="profilePhoto"
                         style={{display: 'none'}}
                         type="file"
                         multiple={false}
                         onChange={(e) => {onImageChange(e)}}
                         accept=".jpeg, .png, .jpg"
                         /> 
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <h1>{user.result.name}</h1>
                </div>
              </div>
            </div> */}
            {/* <div className="text-right"> <a href="manage-ads.html" className="gd-btn">manage ads</a> </div> */}
            <div className="frnd-meta-bar ">
              <div className="tabs-main">
                <nav>
                  <div className="nav nav-tabs"> 
                  <Link className="nav-item nav-link active" to="editbasicinfo">basic details</Link> 
                  <Link className="nav-item nav-link" to="/editmyaccountintro">intro</Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*my-account-top end here*/} 
        {/*my-account-bottom start here*/}
        <div className="frnd-req-profile-bottom ">
          <div className="wrapper">
            <div className="row">
              <div className="col-12">
                <form onSubmit={handlesubmit}>
                  <div className="basic-details box">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <label ><i className="fa fa-user" /> Name:<span>*</span></label>
                        <input type="text" name="name" placeholder={user?.result?.name} onChange={handleChange} className="form-control" />
                      </div>
                      {/* <div className="col-md-6 col-12">
                        <label htmlFor><i className="fa fa-user" />last name:<span>*</span></label>
                        <input type="text" placeholder="Carson" className="form-control" />
                      </div> */}
                      <div className="col-md-6 col-12">
                        <label ><i className="fa fa-envelope" />email:</label>
                        <p>{user.result.email}</p>
                      </div>
                      <div className="col-12">
                      <Link to="/myaccount" className="black-btn">back</Link>
                        <button type="submit" className="gd-btn">update</button>
                        {/* <a href="change-password.html" className="gd-btn">change password</a> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*my-account-bottom end here*/} 
      </section>      
        </div>
    )
}

export default EditBasicInfo
