import React from 'react';
import PropTypes from 'prop-types';
import { notificationOverlay } from '../../constants';
import {
    NexusCard,
    NexusCardAvatar,
    NexusCardHeader,
    NexusCardHeaderButton,
    NexusCardHeaderTitle,
    NexusIcon,
    NexusNotification
} from '@nexus/react';

import CardHeaderImage from '@nexus/core/dist/assets/images/card-header-image.png';
import ButtonIcon from '@nexus/core/dist/assets/icons/navigation/ic_more_horiz_24px.svg';
import { typVariant } from '@nexus/core/dist/types/components/nexus-notification/nexus-notification';


const NotificationOverlayComponent: React.FC = (props) => {
    const { variant = notificationOverlay.variant } = { ...props };

    return (
        <div className="nexus-rhythm-4">
            <NexusCard clickable={false}>
                <NexusCardAvatar>
                    <img src={CardHeaderImage} alt="Michael Bay" />
                </NexusCardAvatar>
                <NexusCardHeader>
                    <NexusCardHeaderTitle>Michael Bay</NexusCardHeaderTitle>
                    <NexusNotification data-testid="notification-message" {...props} variant={variant as typVariant}>
                        {notificationOverlay.text}
                    </NexusNotification>
                    <NexusCardHeaderButton>
                        <button className="nexus-btn-icon" id="btn" title="btn">
                            <NexusIcon src={ButtonIcon} />
                        </button>
                    </NexusCardHeaderButton>
                </NexusCardHeader>
            </NexusCard>
        </div>
    );
}

NotificationOverlayComponent.propTypes = {
    variant: PropTypes.string,
    message: PropTypes.string
};

export default NotificationOverlayComponent;
