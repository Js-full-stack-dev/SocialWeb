import React,{useState} from 'react';
import BasicDetails from './BasicDetails';
import EditCoverAndProfilePhoto from './EditCoverAndProfilePhoto';
import Intro from './Intro';


const MyAccount = () => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // const [coverPhoto, setCoverPhoto] = useState("images/frnd-cover.png");

    return (
        <div>
            <section className="friend-request-profile"> 
        {/*my-account-top start here*/}
        <div className="frnd-req-profile-top my-account-info-top">
          <div className="wrapper">
          

<EditCoverAndProfilePhoto />

            {/* <div className="text-right"> <a href="manage-ads.html" className="gd-btn">manage ads</a> </div> */}
            <div className="frnd-meta-bar ">
              <div className="tabs-main">
<nav>
<div className="nav nav-tabs" id="nav-tab" role="tablist">
  <a className="nav-item nav-link active" id="nav-basic-details-tab" data-toggle="tab" href="#nav-basic-details" role="tab" aria-controls="nav-basic-details" aria-selected="true">basic details</a> 
  <a className="nav-item nav-link" id="nav-intro-tab" data-toggle="tab" href="#nav-intro" role="tab" aria-controls="nav-intro" aria-selected="false">intro</a> 
</div>
</nav>
              </div>
            </div>
          </div>
        </div>
        {/*my-account-top end here*/} 
        {/*my-account-bottom start here*/}
        <div className="frnd-req-profile-bottom">
          <div className="wrapper">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-basic-details" role="tabpanel" aria-labelledby="nav-basic-details-tab">
  <BasicDetails />                
                  </div>
                  <div className="tab-pane fade" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab">
  <Intro />  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*my-account-bottom end here*/} 
      </section>
      
        </div>
    )
}

export default MyAccount
