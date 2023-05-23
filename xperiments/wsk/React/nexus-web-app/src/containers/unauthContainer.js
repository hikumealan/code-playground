import React from 'react';
import PropTypes from 'prop-types';
import { UnauthNavbar } from '../components';
import { BannerContainer } from '@nexus-ui-starter-kit/core/containers';
const UnauthContainer = ({ children }) => (
    <React.Fragment>
        <UnauthNavbar />
        <BannerContainer>{children}</BannerContainer>
    </React.Fragment>
);

UnauthContainer.propTypes = {
    children: PropTypes.element.isRequired
};
export default UnauthContainer;
