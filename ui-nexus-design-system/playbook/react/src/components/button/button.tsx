import React from 'react';

interface ButtonComponentProps {
  disabled: boolean;
  buttonClass: string;
  text: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { disabled, buttonClass, text } = { ...props };

  return (
    <button disabled={disabled} className={buttonClass}>
      {text}
    </button>
  );
};

ButtonComponent.defaultProps = {
  disabled: false,
  buttonClass: 'nexus-btn',
  text: 'Click Me!'
};

export default ButtonComponent;
