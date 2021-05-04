import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Channels = () => {

const yourClientID = "175956194481-vlmebtju6b8o9eqgv2lp1t837u4cc6q0.apps.googleusercontent.com";
const yourClientSecret = "Fu3rtfD6K90iccGEileXqAlO";
const ApiKey = "AIzaSyB7qUyHimP1P4HhGG5V4nrGbXNoYFn4Aeo";
const UserId = "-8lOqidDryaxlFMnDpW1Dg";
const ChannelID = "UC-8lOqidDryaxlFMnDpW1Dg";

const [youtubeData, setYoutubeData] = useState();

// let youtube = {}

  useEffect( async() => {
//   youtube = axios.get("https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.subscriptions.list?part=snippet,contentDetails&mine=true")
//   // axios.get("https://www.googleapis.com/youtube/v3/subscriptions/"+ ApiKey)
// console.log(`youtube`, youtube)

// const youtubeApiCall = axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=statistics&id=${UserId}&key${ApiKey}`);
// const Gauth =  axios.get(`https://www.googleapis.com/auth/youtube.readonly`)
// const  youtubeApiCall = await axios.get(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.subscriptions.list?part=snippet,contentDetails&channelId=${ChannelID}`)
// console.log(`Gauth`, Gauth)
// console.log(`youtubeApiCall`, youtubeApiCall)

  }, [])



    return (
        <div>
                <div className="subscribe-channel box">
                  <h2>Subscribed Youtube Channels List</h2>
                  {/* { */}
                    {/* youtube.map((data) => ( */}
                    <a href="subscribe-channels.html">
                    <div className="media align-items-center"> 
                    <img src={"images/user-2.png"} className="img-fluid" alt="" />
                      <div className="media-body">
                        <h4>channel name  {}</h4>
                        </div>
                      </div>
                    </a>


                  {/* )) */}

                  {/* } */}

                  <div className="text-right"> 
                  <Link to="/viewallchannels" className="view-all">view all</Link>
                  </div>
                </div>
        </div>
    )
}

export default Channels
