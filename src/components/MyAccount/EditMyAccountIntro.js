import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as api from '../../api/apis';
import EditCoverAndProfilePhoto from './EditCoverAndProfilePhoto';

const EditMyAccountIntro = () => {

  const history = useHistory();
  const [EditState, setEditState] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handlesubmit = (e) => {
    e.preventDefault();
  
    api.profileUpdate(user.result._id,EditState)
    console.log(`basic Edit State`, EditState, user.result._id);

    // setUser(JSON.stringify(localStorage.setItem('profile')));
    updateProfile(EditState)



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

  // const handleChangeValue = (e) => {
  //   setEditState({...EditState, [e.target.value]: e.target.value })
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
                <div className="frnd-cover"> <img src= {user?.result.coverPhoto  ? user?.result.coverPhoto : "images/frnd-cover.png"}  className="img-fluid" alt="" /> </div>
              </div>
            </div>
            <div className="frnd-profile-info">
              <div className="row">
                <div className="col-12 text-right">
                  <div className="profile-img"> <img src={user.result.profilePhoto} className="img-fluid" alt="" />
                    <label name="my-account-img"> <i className="fa fa-camera" />
                    <input 
                        id="profilePhoto"
                         style={{display: 'none'}}
                         type="file"
                         multiple={false}
                        //  onChange={(e) => {onImageChange(e)}}
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
                  <Link className="nav-item nav-link" to="/editbasicinfo">basic details</Link> 
                  <Link className="nav-item nav-link active" to="editmyaccountintro">intro</Link> 
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*my-account-top end here*/} 
        {/*my-account-bottom start here*/}
        <div className="frnd-req-profile-bottom edit-account-intro">
          <div className="wrapper">
            <div className="row">
              <div className="col-12">
                <form onSubmit={handlesubmit}>
                  <div className="intro-info box">
                    <h2>Description:</h2>
                    <textarea onChange={handleChange} name="description" id cols rows className="form-control" placeholder={user.result.description}    />
                    <h2>intro:</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <h3><i className="fa fa-graduation-cap" />education</h3>
                        <div className="repeater-default">
                          <div className="repeater">
                            <div data-repeater-list="car">
                              <div data-repeater-item>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label >Education Institute:</label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input name="educationInstitute" onChange={handleChange} type="text" className="form-control" placeholder={user.result.educationInstitute}  />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label >Select Level:</label>
                                  </div>
                                  <div className="col-lg-8">
                                    <select name="educationLevel"  onChange={handleChange} id="educationLevel" className="form-control">
                                      <option value>Select</option>
                                      <option value="School" >School</option>
                                      <option value="College">College</option>
                                      <option value="University">University</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label >Discipline:</label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input name="educationDisiplane" onChange={handleChange} type="text" className="form-control" placeholder={user.result.educationDisiplane}     />
                                  </div>
                                </div>
                                <div data-repeater-delete>
                                  <button className="delete-row"><i className="fa fa-trash-alt " /> </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add-icon-div">
                            <button type="button" data-repeater-create className="gd-btn"> <i className="fa fa-plus" /> </button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <label ><i className="fa fa-address-card" />Address:</label>
                          </div>
                          <div className="col-lg-8">
                            <input name="address" onChange={handleChange} type="text" className="form-control" placeholder={user.result.address}    />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <label ><i className="fa fa-map-marker-alt" />location:</label>
                          </div>
                          <div className="col-lg-8">
                            <input name="location" onChange={handleChange} type="text" className="form-control" placeholder={user.result.location}    />
                          </div>
                        </div>
                       
                         
                          <div className="col-12">
                        <button type="submit" className="gd-btn">update</button>
                      <Link to="/myaccount" className="black-btn">back</Link>
                       {/* myaccountintro */}
                      
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3><i className="fa fa-briefcase" />Work</h3>
                        <div className="repeater-default">
                          <div className="repeater">
                            <div data-repeater-list="car">
                              <div data-repeater-item>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label >Designation:</label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input name="workDesignation" onChange={handleChange} type="text" className="form-control" placeholder={user.result.workDesignation}     />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <label >Company:</label>
                                  </div>
                                  <div className="col-lg-8">
                                    <input name="workCompany" onChange={handleChange} type="text" className="form-control" placeholder={user.result.workCompany}   />
                                  </div>
                                </div>
                                <div data-repeater-delete>
                                  <button className="delete-row"><i className="fa fa-trash-alt " /> </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add-icon-div">
                            <button type="button" data-repeater-create className="gd-btn"> <i className="fa fa-plus" /> </button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <label ><i className="fa fa-heart" />relationship:</label>
                          </div>
                          <div className="col-lg-8">
                            <input name="realtionshipStatus" onChange={handleChange} type="text" className="form-control" placeholder={user.result.realtionshipStatus}    />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <label ><i className="fa fa-clock" />Date of Birth:</label>
                          </div>
                          <div className="col-lg-8">
                            <input name="dob" onChange={handleChange} type="date" className="form-control" placeholder={user.result.dob}   />
                          </div>
                        </div>
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

export default EditMyAccountIntro
