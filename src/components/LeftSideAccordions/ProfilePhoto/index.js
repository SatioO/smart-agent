import React from "react";
import ProfilePhotoImg from "../../../assets/images/profile-photo.png";

import Slider from "react-slick";

import SliderForProfile from "../SliderForProfile";

export default () => (
    <div>
        <div className="profile_photo_wrap">
            <h6>Select Profile Photo </h6>
            <div className="upload_wrap pb-4">
                <div className="row no-gutters">
                    <div className="col-3">
                        <div className="img">
                            <img src={ProfilePhotoImg} alt="ProfileImage1" />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="right_wrap">
                            <p>
                                Select profile photo from your computer or
                                select photo from your Facebook account.
                            </p>
                            <div className="upload-btn-wrapper">
                                <button className="btn">
                                    Select Profile Photo
                                </button>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>Select from your recent uploads </h6>
            <SliderForProfile />
            {/* <div className="profile_photo_carousel"> */}
            {/* <Carousel
        showArrows={true}
         onChange={onChange}
         onClickItem={onClickItem}
         onClickThumb={onClickThumb} */}

            {/* <div>
          <img src={ProfilePhotoImg} alt="ProfileImage2" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 1" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 2" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 3" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 4" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 5" />
        </div>
        <div>
          <img src="assets/images/profile-photo.png" alt="Profile Image 6" />
        </div> */}
            {/* </div> */}
            {/* </Carousel> */}
        </div>
    </div>
);
