import React from 'react';
import { button } from '../../constants';

const ButtonComponent: React.FC = () => {
  return (
    <div className='nexus-center-xs nexus-mt-5'>
      <button className='nexus-btn'>{button.text}</button>
    </div>
  );
};

export default ButtonComponent;
