import React, { Component } from "react";
import config from "./config";
import Loadable from "react-loadable";
// import { Scrollbars } from "react-custom-scrollbars";
import { CustomScrollBar } from "react-custom-scrollbar";
import loaderSpinner from "../../assets/images/spinner.gif";

let LoadableBar = null;

export default class Accordion extends Component {
    state = {
        accordion: config
    };

    componentWillMount() {
        const [section] = this.state.accordion.filter(item => item.open);

        LoadableBar = Loadable({
            loader: section.template,
            loading: () => (
                <div className="loaderimg">
                    <img src={loaderSpinner} />
                </div>
            )
        });

        this.setState({ ...this.state });
    }

    handleClick = target => {
        const { accordion } = this.state;

        requestAnimationFrame(() => {
            if (this.refs[target.id].classList.contains("show")) {
                // this.refs[target.id].classList.remove('show');
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

            this.setState({
                accordion: accordion.map((item, i) => {
                    if (target.id === item.id) {
                        item.open = true;
                        return item;
                    }

                    item.open = false;
                    return item;
                })
            });
        });
    };
    render() {
        const { accordion } = this.state;
        return (
            <div className="col col-md-4">
                <div className="accordion" id="accordionCoverPageEditor">
                    {accordion.map((item, i) => (
                        <div className="card" key={i}>
                            <div className="card-header" id="headingOne">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    onClick={() => this.handleClick(item)}
                                    aria-expanded={item.open ? "true" : "false"}
                                    aria-controls="bookCover"
                                    ref={item.id}
                                >
                                    {item.title}
                                    <div className="accordion_icon">
                                        {item.open ? (
                                            <span className="minus_icon">
                                                <i className="fa fa-minus" />
                                            </span>
                                        ) : (
                                            <span className="plus_icon">
                                                <i className="fa fa-plus" />
                                            </span>
                                        )}
                                    </div>
                                </button>
                            </div>
                            <div
                                ref={item.id}
                                className={
                                    item.open ? "collapse show" : "collapse"
                                }
                                aria-labelledby="headingOne"
                                data-parent="#accordionCoverPageEditor"
                            >
                                <div className="card-body accordion_scrollbar">
                                    <CustomScrollBar
                                        allowOuterScroll={false}
                                        heightRelativeToParent={260}
                                        onScroll={() => {}}
                                        addScrolledClass={true}
                                        freezePosition={false}
                                        handleClass="inner-handle"
                                        minScrollHandleHeight={38}
                                    >
                                        {LoadableBar && <LoadableBar />}
                                    </CustomScrollBar>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
