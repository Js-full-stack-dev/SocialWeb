import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../actions/posts';
import { useSelector } from "react-redux";
import axios from "axios";
import NewsFeeds from '../NewsFeeds';

const Photos = () => {
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const posts = useSelector((state) => state.posts);
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
                              <button type="button" id="show-more">show more</button>
                              <button type="button" style={{display: 'none'}} id="show-less">show less</button>
                            </div>
                          </div>
                        </div>
                      </div>
        </div>
    )
}

export default Photos
