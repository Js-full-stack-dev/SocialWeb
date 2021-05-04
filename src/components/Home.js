import React from 'react';

import Channels from "./Channels/Channels";
import MyChannel from "./Channels/MyChannel";
import Active from "./Active";
import PrivacyModal from "./PostActions/PrivacyModal";
import CreatePost from './CreatePost';
import Report from './NewsFeed/Report';
import DeletePostModal from './PostActions/DeletePostModal';
import NewsFeeds from './NewsFeeds';
import PostReported from './NewsFeed/PostReported';
import LikeShareInfoModal from './PostActions/LikeShareInfoModal';

import Stories from "./Stories/Stories";
import AddStoriesModal from './Stories/AddStoriesModal';
import SharePostModal from './PostActions/SharePostModal';

const Home = ({setCurrentId}) => {

  // const posts = useSelector((state) => state.posts)

    return (
      <div>

        {/*header end here*/} 

        {/*home section start here*/}
        <section className="home">
          <div className="container-fluid">
            <div className="row"> 
              {/*col-3 start*/}
              <div className="col-3"> 
                {/*subscribe-channel start here*/}
            <Channels />
                {/*subscribe-channel start here*/} 
                {/* My channel start here*/}
           <MyChannel />
                {/* My channel end here*/}
                {/* <div className="add-banner"> <img src="images/add.png" className="add-img img-fluid" alt="" /> </div> */}
              </div>
              {/*col-3 end*/} 
              {/*col-6 start*/}
              <div className="col-6">
                <div className="status-box box">
               
                 <CreatePost setCurrentId={setCurrentId} />
                </div>
                <h2 className="newsfeed-heading">Newsfeed</h2>
                <NewsFeeds />
              </div>
              {/*col-6 end*/} 
              {/*col-3 start here*/}
              <div className="col-3"> 
                {/*stories start here*/}
               {/* <Stories /> */}
                {/*stories end here*/} 
                {/*active box start here*/}
               <Active/>
                {/*active box end here*/} 
              </div>
              {/*col-3 end here*/} 
            </div>
          </div>
        </section>
        {/*home section end here*/} 
        {/*like and share modal start here*/}
        <LikeShareInfoModal />
        {/*like and share modal end here*/} 

        {/*share-post start here */}
       <SharePostModal />  
        {/*share-post end here */} 

        {/*share-post start here */}
    
        {/*share-post end here */} 

        {/*privacy-modal start here */}
       <PrivacyModal />
        {/*privacy-modal end here */} 
      
        {/*delete-post-modal start here */}
       <DeletePostModal />
        {/*delete-post-modal end here */} 
       
        {/*report-post-modal start here */}
{/* if user is diff from curent user  */}
         <Report />
         <PostReported />
        {/*report-post-modal end here */} 

        {/*delete-post-modal-2 start here */}
{/* post deleted */}
        {/*delete-post-modal-2 end here */} 
     


        {/*add-story-modal start here */}

        {/*add-story-modal end here */} 
        {/*story-modal start here */}
     
        {/*story-modal end here */} 
        {/*story-viewers-modal start here */}
      
        {/*story-viewers-modal end here */}
      </div>
    )
  }

 

export default Home
