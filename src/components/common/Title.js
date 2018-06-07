import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const handleTitle = function () {
    browserHistory.push('/');
};

const Title = ({ title }) => {
    return <div onClick={handleTitle}>{title}</div>;
}

Title.defaultProps = {
    title: "Title"
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};
export default Title;
