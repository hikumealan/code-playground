import React from 'react';
import PropTypes from 'prop-types';


const SingleColumn = ({ children }) => (
    <div className="nexus-container">
        <div className="nexus-row">
            <div className="nexus-col-xs-4">
                { children }
            </div>
        </div>
    </div>
);


SingleColumn.defaultProps = {
};

SingleColumn.propTypes = {
    children: PropTypes.node.isRequired
};

export default SingleColumn;
