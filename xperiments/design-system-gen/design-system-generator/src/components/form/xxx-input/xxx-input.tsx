import { Component, Host, h, Prop } from '@stencil/core';
import { uuid } from '../../../utils/utils';
// import PasswordShow24px from 'material-design-icons/action/svg/production/ic_visibility_24px.svg';
// import PasswordShow48px from 'material-design-icons/action/svg/production/ic_visibility_48px.svg';
// import PasswordHide24px from 'material-design-icons/action/svg/production/ic_visibility_off_24px.svg';
// import PasswordHide48px from 'material-design-icons/action/svg/production/ic_visibility_off_48px.svg';
import CalendarEvent18px from 'material-design-icons/action/svg/production/ic_event_18px.svg';
// import CalendarEvent24px from 'material-design-icons/action/svg/production/ic_event_24px.svg';
// import CalendarEvent48px from 'material-design-icons/action/svg/production/ic_event_48px.svg';
// import DropDownArrow18px from 'material-design-icons/action/svg/production/ic_arrow_drop_down_18px.svg';
// import DropDownArrow24px from 'material-design-icons/action/svg/production/ic_arrow_drop_down_24px.svg';
// import DropDownArrow36px from 'material-design-icons/action/svg/production/ic_arrow_drop_down_36px.svg';
// import DropDownArrow48px from 'material-design-icons/action/svg/production/ic_arrow_drop_down_48px.svg';



@Component({
  tag: 'xxx-input',
  styleUrl: 'xxx-input.css',
  shadow: true,
})
export class XxxInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  // @Prop() name: string;
  // @Prop() id: string;
  @Prop() uuid: string = uuid();
  @Prop() data: any;
  @Prop() type: 'button' | 'calendar' | 'checkbox' | 'color' | 'currency' | 'date' | 'datetime' | 'email' | 'file' | 'geolocation' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'select' | 'submit' | 'tel' | 'text' | 'textarea' | 'time' | 'toggle' | 'typeahead' | 'url' | 'week' = 'text';
  @Prop() variant: 'blank' | 'browser' | 'desktop' | 'ios' | 'md' | 'mac' | 'windows' | 'web' = 'web';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  render() {
    return (
      <Host class={'xxx-input'}>
        {this.label && <label htmlFor={`xxx-input-label-${this.uuid}`}>{this.label}:</label>}
        {this.placeholder && <div>{this.placeholder}</div>}
        <input id={`input-${this.uuid}`} type={this.type} value={this.value} />
        {this.type === 'date' && <xxx-icon src={CalendarEvent18px}></xxx-icon>}

        {/*<input accept={} alt={} checked={} disabled={} max={} maxlength={} />*/}
        <slot></slot>
      </Host>
    );
  }

}
