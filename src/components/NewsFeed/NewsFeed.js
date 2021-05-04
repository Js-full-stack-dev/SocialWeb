import React,{useState} from 'react'
// E:\AbdulBasit\social\socialweb\social\src\components\NewsFeed\NewsFeed.js
import MyChannel from '../Channels/MyChannel';
import DeletePostModal from '../PostActions/DeletePostModal';
import PrivacyModal from '../PostActions/PrivacyModal';
import LeftPhotos from './LeftPhotos';
import Photos from './Photos';
import PostReported from './PostReported';
import Report from './Report';
import Timeline from './Timeline';
import Videos from './Videos';
import ViewAllFriends  from "./ViewAllFriends";
import Intro from "../MyAccount/Intro";
import IntroLeft  from "./IntroLeft";

const NewsFeed = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  const [coverPhoto, setCoverPhoto] = useState("images/frnd-cover.png");

    return (
        <div>
               <div>
        <section className="friend-request-profile"> 
          {/*frnd-req-profile-top start here*/}
          <div className="frnd-req-profile-top">
            <div className="wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="frnd-cover"> <img src={user.result.coverPhoto ? user.result.coverPhoto : "images/frnd-cover.png"} className="img-fluid" alt="" /> </div>
                </div>
              </div>
              <div className="frnd-profile-info">
                <div className="row">
                  <div className="col-12 text-right">
                    <div className="profile-img"> <img src={user.result.profilePhoto ? user.result.profilePhoto : "images/avatar.png"} className="img-fluid" alt="" /> <span className="green-bg" /> </div>
                    <button type="button" className="nbg-btn" data-toggle="modal" data-target=".report-post-modal">report</button>
                  </div>
                  <div className="col-12 text-center">
                    <h1>{user.result.name}</h1>
                    <p>{user.result.description}</p>
                  </div>
                </div>
              </div>
              <div className="frnd-meta-bar ">
                <div className="tabs-main">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist"> 
                    <a className="nav-item nav-link active" id="nav-timeline-tab" data-toggle="tab" href="#nav-timeline" role="tab" aria-controls="nav-timeline" aria-selected="true">timeline</a> 
                    <a className="nav-item nav-link" id="nav-photos-tab" data-toggle="tab" href="#nav-photos" role="tab" aria-controls="nav-photos" aria-selected="false">photos</a>
                     <a className="nav-item nav-link" id="nav-videos-tab" data-toggle="tab" href="#nav-videos" role="tab" aria-controls="nav-videos" aria-selected="false">videos</a> 
                     <a className="nav-item nav-link" id="nav-friend-list-tab" data-toggle="tab" href="#nav-friend-list" role="tab" aria-controls="nav-friend-list" aria-selected="false">friend list</a> 
                     </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/*frnd-req-profile-top end here*/} 
          {/*frnd-req-profile-bottom start here*/}
          <div className="frnd-req-profile-bottom">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-4 col-12"> 
                  {/*intro start here*/}
            {/* <Intro /> */}
            <IntroLeft />
                  {/*intro end here*/} 
                  {/* My channel start here*/}
           <MyChannel />
                  {/* My channel end here*/} 
                  {/*left-photos start here*/}
            {/* <LeftPhotos /> */}
            <Photos />
                  {/*left-photos end here*/} 
                </div>

                <div className="col-lg-8 col-12">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-timeline" role="tabpanel" aria-labelledby="nav-timeline-tab">
                      {/* timelineStart */}
 <Timeline />
                      {/* timeline End */}
                    </div>
                    <div className="tab-pane fade" id="nav-photos" role="tabpanel" aria-labelledby="nav-photos-tab"> 
                      {/* photos start here*/}
                   <Photos />
                      {/* photos end here*/} 
                    </div>
                    <div className="tab-pane fade" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab"> 
                      {/* videos start here*/}
                   <Videos />
                      {/* videos end here*/} 
                    </div>
                    <div className="tab-pane fade" id="nav-friend-list" role="tabpanel" aria-labelledby="nav-friend-list-tab">
                    <ViewAllFriends />
                   
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
          {/*frnd-req-profile-bottom end here*/} 
        </section>
        {/*friend-request-profile end here*/} 
        {/*friend-video-modal start here*/}
        <div className="modal fade friend-video-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="vid-box">
                      <video poster="images/video.png" controls className>
                        <source src="video/mov_bbb.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="col-12">
                    <form action>
                      <ul className="vid-bar">
                        <li>
                          <button type="button"><i className="fa fa-thumbs-up" />like</button>
                        </li>
                        <li>
                          <button type="button"><i className="fa fa-thumbs-down" />dislike</button>
                        </li>
                        <li>
                          <button type="button"><i className="fa fa-plus" />add to playlist</button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*friend-video-modal end here*/} 
        {/*privacy-modal start here */}
       <PrivacyModal />
        {/*privacy-modal end here */} 
        {/*delete-post-modal start here */}
      <DeletePostModal />
        {/*delete-post-modal end here */} 
        {/*report-post-modal start here */}
        <Report />
        {/*report-post-modal end here */} 
        {/*delete-post-modal-2 start here */}
     <PostReported />
        {/*delete-post-modal-2 end here */} 
        {/*cancel-frnd-req start here */}
        {/* <div className="modal fade cancel-frnd-req common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Cancel Friend Request</h2>
                    <img src="images/req.png" className="img-fluid" alt="friend-req image" />
                    <p>Are you sure you want to cancel the friend request?</p>
                    <button type="button" className="gd-btn" data-dismiss="modal" aria-label="Close" id="cancel-req">Yes, Cancel</button>
                    <button type="button" className="nbg-btn" data-dismiss="modal" aria-label="Close">no</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*cancel-frnd-req end here */} 
        {/*unfriend-modal start here */}
        {/* <div className="modal fade unfriend-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>unfriend</h2>
                    <img src="images/req.png" className="img-fluid" alt="friend-req image" />
                    <p>Are you sure you want to unfriend your friend?</p>
                    <button type="button" className="gd-btn" data-dismiss="modal" aria-label="Close" id="unfriend-confirm-modal">Yes</button>
                    <button type="button" className="nbg-btn" data-dismiss="modal" aria-label="Close">no</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*unfriend-modal end here */} 
        {/*unfriend-confirm-modal start here */}
        {/* <div className="modal fade unfriend-confirm-modal common-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span className="fa fa-times" aria-hidden="true"> </span></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>unfriend</h2>
                    <img src="images/req.png" className="img-fluid" alt="friend-req image" />
                    <p>You Have Unfriended Alex Martin</p>
                    <button type="button" className="gd-btn" data-dismiss="modal" aria-label="Close">okay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
        </div>
    )
}

export default NewsFeed
