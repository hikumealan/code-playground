import React, { useEffect, useState } from 'react';
import { toastAutoClose } from '../../constants';
import { NexusToast } from '@nexus/react';

const ToastWithAutoCloseComponent: React.FC = () => {
    const [timer, setTimer] = useState(toastAutoClose.timeLeft);
    useEffect(() => {
        if(timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000)
        }},[timer]
    );

    return (
        <div className='nexus-center-xs nexus-pt-5'>
            {timer < 1 ? <button className='nexus-mt-2 nexus-btn nexus-btn-primary' onClick={() => setTimer(20)}>Reset</button> :
            <NexusToast data-testid='toast-with-auto-close' autoClose={timer * 1000}>
                {toastAutoClose.message} {timer}s.
            </NexusToast>}
        </div>
    );
};


export default ToastWithAutoCloseComponent;
