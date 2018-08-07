import React, { Component } from "react";
import config from "./config";
import Loadable from "react-loadable";
import loaderSpinner from "../../assets/images/spinner.gif";

let LoadableBar = null;

export default class Accordion extends Component {
    componentWillMount() {
        const [section] = config.filter(item => item.open);

        LoadableBar = Loadable({
            loader: section.template,
            loading: () => (
                <div className="loaderimg">
                    <img src={loaderSpinner} />
                </div>
            )
        });
        this.setState({});
    }
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
                loading: () => (
                    <div className="loaderimg">
                        <img src={loaderSpinner} />
                    </div>
                )
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
                                    aria-expanded="false"
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
                                className={
                                    accordion.open
                                        ? "collapse show"
                                        : "collapse"
                                }
                                aria-labelledby="headingOne"
                                data-parent="#accordionCoverPageEditor"
                            >
                                <div className="card-body accordion_scrollbar">
                                    {LoadableBar && <LoadableBar />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
