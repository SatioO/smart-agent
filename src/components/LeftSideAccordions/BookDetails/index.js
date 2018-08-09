import React from "react";

export default () => (
    <div>
        <div className="form-row">
            <div className="col">
                <label for="booktitle">Book Title Suggestions</label>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="optradio"
                        />
                        Selling Secrets
                    </label>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="optradio"
                        />
                        How to sell home efficiently
                    </label>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="optradio"
                        />
                        Learn to sell home
                    </label>
                </div>

                <div className="form-check ">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="optradio"
                        />
                        <input
                            type="textbox"
                            maxlength="15"
                            placeholder="Enter custom title"
                            className="form-control"
                        />
                    </label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="col">
                <label for="phonenumber">Enter Book Description</label>
                <textarea
                    className="form-control"
                    rows="3"
                    height="10"
                    width="30"
                    id="comment"
                    placeholder=""
                />
            </div>
        </div>
        <div className="form-row">
            <div className="col">
                <label for="phonenumber">Enter Summary Bio</label>
                <textarea
                    className="form-control"
                    rows="3"
                    height="10"
                    width="30"
                    id="comment"
                    placeholder=""
                />
            </div>
        </div>
    </div>
);
