import React from 'react';
import '../App.css';


function UserCreate() {
  return (
    <div className="content" >
      <div class="container register-form">
        <div class="form">
          <div class="note">
            <p>New Account</p>
          </div>

          <div class="form-content">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Name *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email*" value="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Password *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Confirm Password *" value="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="small-12 medium-2 large-2 columns">
                <div class="circle">
                  <img class="profile-pic" src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg" />
                </div>
                <div class="p-image">
                  <i class="fa fa-camera upload-button"></i>
                  <input class="file-upload" type="file" accept="image/*" />
                </div>
              </div>
            </div>
            <button type="button" class="btnSubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;