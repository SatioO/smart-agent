import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchBar extends PureComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.func.isRequired
    };

    handleChange = e => {
        e.preventDefault();
        this.props.value(e.target.value);
    };

    render() {
        const { placeholder = "" } = this.props;

        return (
            <div className="search_wrap">
                <form className="form-inline">
                    <input
                        className="form-control"
                        type="search"
                        onChange={this.handleChange}
                        placeholder={placeholder}
                        aria-label="Search"
                    />
                    <div className="search_icon">
                        <i className="fas fa-search" />
                    </div>
                </form>
            </div>
        );
    }
}
