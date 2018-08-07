import React from "react";
import Slider from "react-slick";
import ProfilePhotoImg from "../../../assets/images/profile-photo.png";

export default class SliderForProfile extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    {/* <h3>1</h3> */}
                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
                <div>
                    {/* <h3>2</h3> */}

                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
                <div>
                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
                <div>
                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
                <div>
                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
                <div>
                    <img src={ProfilePhotoImg} alt="ProfileImage2" />
                </div>
            </Slider>
        );
    }
}
