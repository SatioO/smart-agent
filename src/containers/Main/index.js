import "./index.scss";
import React from "react";
import { BookPreview, Accordion } from "../../components";

export default () => (
    <main>
        <div className="inner_content">
            <section className="cover_page_editor_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb_wrap">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-transparent pl-0 pt-1 pb-1 mb-2">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Wizard</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Book Cover Editor
                                        </li>
                                    </ol>
                                </nav>
                            </div>
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
                                    <a
                                        href="#"
                                        className="btn btn-primary mr-2"
                                    >
                                        {" "}
                                        <i className="fas fa-chevron-left" />{" "}
                                        <span>Back</span>
                                    </a>
                                    <a href="#" className="btn btn-primary">
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
