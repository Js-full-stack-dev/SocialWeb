import React from 'react'

const Stories = () => {
    return (
        <div>
         <div className="stories box">
                  <div className="d-flex justify-content-between">
                    <h2>Stories</h2>
                    <div className="dropdown">
                      <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-ellipsis-h" /> </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">View All</a> </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="/addstories">Add story</a> </div>

                    </div>
                  </div>
                  <div className="owl-carousel owl-theme" id="stoires">
                    <div className="item">
                      <div className="add-stories" data-toggle="modal" data-target=".add-story-modal"> <img src="images/story-main.png" className="img-fluid" alt="" /><a href="#" className="stories-button"> <i className="fa fa-plus-circle" /> </a> </div>
                      <div className="stories-name">
                        <h5>Novalee Spicer</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="view-stories" data-toggle="modal" data-target=".view-story-modal" id="view-story-modal"><img src="images/story.png" className="img-fluid" alt="" />
                        <div className="storie-profile-image"> <img src="images/user-story.png" className="img-fluid" alt="" /> </div>
                      </div>
                      <div className="storie-name">
                        <h5>Reyna Chung</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="view-storie" data-toggle="modal" data-target=".view-story-modal" id="view-story-modal"><img src="images/story.png" className="img-fluid" alt="" />
                        <div className="storie-profile-image"> <img src="images/user-story.png" className="img-fluid" alt="" /> </div>
                      </div>
                      <div className="storie-name">
                        <h5>Reyna Chung</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="view-storie" data-toggle="modal" data-target=".view-story-modal" id="view-story-modal"><img src="images/story.png" className="img-fluid" alt="" />
                        <div className="storie-profile-image"> <img src="images/user-story.png" className="img-fluid" alt="" /> </div>
                      </div>
                      <div className="storie-name">
                        <h5>Reyna Chung</h5>
                      </div>
                    </div>
                    <div className="item">
                      <div className="view-storie" data-toggle="modal" data-target=".view-story-modal" id="view-story-modal"><img src="images/story.png" className="img-fluid" alt="" />
                        <div className="storie-profile-image"> <img src="images/user-story.png" className="img-fluid" alt="" /> </div>
                      </div>
                      <div className="storie-name">
                        <h5>Reyna Chung</h5>
                      </div>
                    </div>
                  </div>
                </div>      
        </div>
    )
}

export default Stories
