import React, { Component } from "react";
import config from "./config";
import Loadable from "react-loadable";

let LoadableBar = null;

export default class Accordion extends Component {
    handleClick = target => {
        requestAnimationFrame(() => {
            if (this.refs[target.id].classList.contains("show")) {
                this.refs[target.id].classList.remove("show");
            } else {
                Object.keys(this.refs).forEach(ref => {
                    this.refs[ref].classList.remove("show");
                });
                this.refs[target.id].classList.add("show");
            }

            LoadableBar = Loadable({
                loader: target.template,
                loading: () => {
                    return <div>Loading...</div>;
                }
            });
            this.setState({});
        });
    };
    render() {
        return (
            <div className="col col-md-4">
                <div className="accordion" id="accordionCoverPageEditor">
                    {config.map((accordion, i) => (
                        <div className="card" key={i}>
                            <div className="card-header" id="headingOne">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    onClick={() => this.handleClick(accordion)}
                                    aria-expanded="true"
                                    aria-controls="bookCover"
                                >
                                    {accordion.title}
                                    <div className="accordion_icon">
                                        <span className="minus_icon">
                                            <i className="fa fa-minus" />
                                        </span>
                                        <span className="plus_icon">
                                            <i className="fa fa-plus" />
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div
                                ref={accordion.id}
                                className="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordionCoverPageEditor"
                            >
                                <div className="card-body accordion_scrollbar">
                                    <div className="book_cover_wrap text-center">
                                        <div className="row">
                                            {LoadableBar && <LoadableBar />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
