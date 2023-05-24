import html from '!!raw-loader!../../examples/button/06_floatingButton.html';

export default() => {
  const component = document.createElement('div');
  component.className = 'nexus-center-xs nexus-mt-5';
  component.innerHTML=html;
  return component;
};


import { floatingButton } from "../../constants";
