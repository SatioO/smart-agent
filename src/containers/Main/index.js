import "./index.scss";
import React from "react";
import { BookPreview, Accordion, BreadCrumb } from "components";

export default () => (
    <main>
        <div className="inner_content">
            <section className="cover_page_editor_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <BreadCrumb>
                                <BreadCrumb.Item to="">Home</BreadCrumb.Item>
                                <BreadCrumb.Item to="">Browse</BreadCrumb.Item>
                                <BreadCrumb.Item to="">
                                    Book Cover Editor
                                </BreadCrumb.Item>
                            </BreadCrumb>

                            <div className="title_wrap pb-1">
                                <h1>Book Cover Editor</h1>
                            </div>

                            <div className="cover_page_editor_inner border bg-white">
                                <div className="row no-gutters">
                                    <Accordion />
                                    <BookPreview />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end pt-4 pb-4">
                                <div className="btn_wrap">
                                    <a href="" className="btn btn-primary mr-2">
                                        {" "}
                                        <i className="fa fa-chevron-left" />{" "}
                                        <span>Back</span>
                                    </a>
                                    <a href="" className="btn btn-primary">
                                        <span>Next</span>{" "}
                                        <i className="fa fa-chevron-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
);
