import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const LeftPhotos = () => {
    
  const user = JSON.parse(localStorage.getItem('profile'));
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(post => {
    const postDataResponse = post.data;

    let timelinePosts = []

for (let i = 0; i < postDataResponse.length; i++) {
  if (post.data[i].creator == user.result._id){

    timelinePosts.push(post.data[i]);
  }
}
    setPostData(timelinePosts);

    })
  })
    return (
      <div>
      <div className="friend-photos">
               <div className="box">
                 <div className="row">
                   <div className="col-12">
                     <h2>photos</h2>
                     <ul id="photos">
                       {                           
                       PostData.map((post) => ( 
                       post.selectedFile && <li><img src={post?.selectedFile} className="img-fluid" alt="" /></li>
                         ))
                       }                              
                     </ul>
                     <Link to="/photos">show more photos</Link>
                   </div>
                 </div>
               </div>
             </div>
</div>
    )
}

export default LeftPhotos
