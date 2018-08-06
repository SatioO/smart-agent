import React from "react";
import BookTemplate1 from "../../../assets/images/dummy-cover-photo.png";

export default () => (
    <div className="book_cover_wrap text-center">
        <div className="row">
            <div className="col-6">
                <div className="img_wrap active">
                    <img src={BookTemplate1} alt="Template1" />
                    <div className="icon_tick">
                        <i className="fa fa-check" />
                    </div>
                </div>
                <h6>Template 1</h6>
            </div>
        </div>
    </div>
);
