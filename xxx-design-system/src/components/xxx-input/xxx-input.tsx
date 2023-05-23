import { Component, Element, Host, h, Prop, Watch } from '@stencil/core';
import { uuid } from '../../utils/utils';

@Component({
  tag: 'xxx-input',
  styleUrl: 'xxx-input.scss',
  shadow: true,
})
export class XxxInput {
  // @State() presented = false;
  // @Element() el!: HTMLIonPopoverElement;

  @Element() el!: HTMLElement;

  @Prop() _id?: string;
  @Prop() _name?: string;
  @Prop() uuid?: string;
  // @Prop() classList: string[];
  @Prop() accept?: string;
  @Prop() alt?: string;
  @Prop() autocomplete?: 'on' | 'off';
  @Prop() autofocus: boolean;
  @Prop({ mutable: true }) checked?: boolean;
  // @Prop() checked?: boolean;
  @Prop() dirname?: boolean;


  @Prop() appearance: 'browser' | 'ios' | 'md' | 'none' | '' = '';
  /**
   * HTML types for an input element
   */
  @Prop() type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' = 'text';
  /**
   * HTML attributes to pass to the input element
   */
  @Prop() htmlAttributes?: any;

  @Watch('checked')
  onCheckedChange(newValue: boolean, oldValue: boolean) {
    console.log(`newValue: ${newValue}`);
    console.log(`oldValue: ${oldValue}`);

    console.table(arguments);
    debugger;
    // if (newValue === true && oldValue === false) {
    //   this.present();
    // } else if (newValue === false && oldValue === true) {
    //   this.dismiss();
    // }
  }

  connectedCallback() {
    console.log('connectedCallback');
    // debugger;
  }

  componentWillLoad() {
    console.log('componentWillLoad');
    // debugger;
  }


  // @Watch


  componentShouldUpdate() {
    console.log('componentShouldUpdate');
    // debugger;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
    // debugger;
  }


  componentWillRender() {
    console.log('componentWillRender');
    // debugger;
  }

  render() {
    console.log('render');
    // debugger;
    // const { type, htmlAttributes } = this;
    const myUUID = this.uuid || uuid();
    return (
      <Host>
        {/*<slot></slot>*/}
        <input id={this._id?.length ? `${this._id}` : null}
               name={this._name?.length ? `${this._name}` : null}
          // class={`xxx-input ${this.classList.join(' ')}`}
               class={`xxx-input xxx-input-${myUUID} ${this.appearance ? 'xxx-input-appearance-' + this.appearance : ''}`}
               type={`${this.type}`}
               {...(this.htmlAttributes as any)}
               accept={this.type.toLowerCase() === 'file' ? `${this.accept}` : null}
               alt={this.type.toLowerCase() === 'image' ? `${this.alt}` : null}
               autocomplete={this.autocomplete}
               autofocus={this.autofocus === true ? `autofocus` : null}
               checked={this.checked === true && (this.type.toLowerCase() === 'checkbox' || this.type.toLowerCase() === 'radio') ? `checked` : null}
          // checked={this.checked === true && (this.type.toLowerCase() === 'checkbox' || this.type.toLowerCase() === 'radio')}
               dirname={this.dirname === true && this._name?.length ? `${this._name}.dir` : null}
               onchange={}
               oninput={}
        />
      </Host>
    );
  }


  componentDidRender() {
    console.log('componentDidRender');
    // debugger;
  }

  componentDidLoad() {
    console.log('componentDidLoad');
    // debugger;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // debugger;
  }

}
