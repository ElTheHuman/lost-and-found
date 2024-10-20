import React from "react";
import PropTypes from "prop-types";
import './NotificationDot.css';

const NotificationDot = ({ className = null }) => {

    return (
        <div className={"NotificationDot " + className}></div>
    )

}

NotificationDot.propTypes = {
    className: PropTypes.string,
}

export default NotificationDot;