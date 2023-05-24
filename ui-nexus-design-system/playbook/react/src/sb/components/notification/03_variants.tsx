import React from 'react';
import { notificationVariants } from '../../constants';
import { NexusNotification } from '@nexus/react';

const NotificationVariants: React.FC = () => {
    return (
        <div className='nexus-row'>
            <div className='nexus-col-xs-4'>
                <NexusNotification variant='info'>{notificationVariants.infoMessage}</NexusNotification>
            </div>
            <div className='nexus-col-xs-4'>
                <NexusNotification variant='success'>{notificationVariants.successMessage}</NexusNotification>
            </div>
            <div className='nexus-col-xs-4'>
                <NexusNotification variant='warning'>{notificationVariants.warnMessage}</NexusNotification>
            </div>
            <div className='nexus-col-xs-4'>
                <NexusNotification variant='error'>{notificationVariants.errorMessage}</NexusNotification>
            </div>
        </div>
    );
}


export default NotificationVariants;