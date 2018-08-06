import React from "react";

export default () => (
    <div>
        <div class="contact_details_wrap">
            <form>
                <div className="form-row">
                    <div className="col">
                        <label for="fullname">Full name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            placeholder=""
                            value=""
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="email">E Mail:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder=""
                            value=""
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="phonenumber">Phone Number:</label>
                        <input
                            type="phonenumber"
                            className="form-control"
                            id="text"
                            placeholder=""
                            value=""
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label for="address">Address:</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="address_1"
                            placeholder="."
                            value=""
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="address_2"
                            placeholder=""
                            value=""
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
);
