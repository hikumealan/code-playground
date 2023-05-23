import React from 'react';
import PropTypes from 'prop-types';
import './demoTemplate.scss';

const DemoTemplate = ({ description, children, header }) => (
    <section className="nexus-container">
        <div className="demo-template">
            <div className="nexus-row nexus-start-xs">
                <h2 className="nexus-col-xs-4">
                    <span className="demo-temp-header">{header}</span>
                </h2>
                <p className="nexus-col-xs-4">
                    <span className="demo-temp-des">{description}</span>
                </p>
                <div className="nexus-col-xs-4">
                    <div className="demo-container">{children}</div>
                </div>
            </div>
        </div>
    </section>
);

export default DemoTemplate;
DemoTemplate.propTypes = {
    description: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    header: PropTypes.string.isRequired
};
