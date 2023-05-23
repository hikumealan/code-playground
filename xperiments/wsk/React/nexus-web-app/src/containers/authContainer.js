import React from 'react';
import PropTypes from 'prop-types';
import { AuthNavbar } from '../components';
import { BannerContainer } from '@nexus-ui-starter-kit/core/containers';

const AuthContainer = ({ children }) => (
    <React.Fragment>
        <AuthNavbar />
        <BannerContainer>{children}</BannerContainer>
    </React.Fragment>
);

AuthContainer.propTypes = {
    children: PropTypes.element.isRequired
};

export default AuthContainer;
