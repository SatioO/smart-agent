import "./index.scss";
import React from "react";
import { BookPreview, Accordion, BreadCrumb, Item } from "../../components";

export default () => (
    <main>
        <div className="inner_content">
            <section className="cover_page_editor_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <BreadCrumb>
                                <BreadCrumb.Item>Home</BreadCrumb.Item>
                                <BreadCrumb.Item>Wizard</BreadCrumb.Item>
                                <BreadCrumb.Item>
                                    Book Cover Editor
                                </BreadCrumb.Item>
                            </BreadCrumb>
                            <div className="title_wrap pb-2">
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
                                        <i className="fas fa-chevron-left" />{" "}
                                        <span>Back</span>
                                    </a>
                                    <a href="" className="btn btn-primary">
                                        <span>Next</span>{" "}
                                        <i className="fas fa-chevron-right" />
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