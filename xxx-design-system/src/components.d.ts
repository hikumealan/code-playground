/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface XxxComponent {
        /**
          * HTML attributes to pass to the input element
         */
        "htmlAttributes"?: any;
        /**
          * HTML attributes to pass to the input element
         */
        "theme": '' | 'ios' | 'material' | 'web';
        /**
          * HTML types for an input element
         */
        "type": 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    }
    interface XxxInput {
        "_id"?: string;
        "_name"?: string;
        "accept"?: string;
        "alt"?: string;
        "appearance": 'browser' | 'ios' | 'md' | 'none' | '';
        "autocomplete"?: 'on' | 'off';
        "autofocus": boolean;
        "checked"?: boolean;
        "dirname"?: boolean;
        /**
          * HTML attributes to pass to the input element
         */
        "htmlAttributes"?: any;
        /**
          * HTML types for an input element
         */
        "type": 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
        "uuid"?: string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLXxxComponentElement extends Components.XxxComponent, HTMLStencilElement {
    }
    var HTMLXxxComponentElement: {
        prototype: HTMLXxxComponentElement;
        new (): HTMLXxxComponentElement;
    };
    interface HTMLXxxInputElement extends Components.XxxInput, HTMLStencilElement {
    }
    var HTMLXxxInputElement: {
        prototype: HTMLXxxInputElement;
        new (): HTMLXxxInputElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "xxx-component": HTMLXxxComponentElement;
        "xxx-input": HTMLXxxInputElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface XxxComponent {
        /**
          * HTML attributes to pass to the input element
         */
        "htmlAttributes"?: any;
        /**
          * HTML attributes to pass to the input element
         */
        "theme"?: '' | 'ios' | 'material' | 'web';
        /**
          * HTML types for an input element
         */
        "type"?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    }
    interface XxxInput {
        "_id"?: string;
        "_name"?: string;
        "accept"?: string;
        "alt"?: string;
        "appearance"?: 'browser' | 'ios' | 'md' | 'none' | '';
        "autocomplete"?: 'on' | 'off';
        "autofocus"?: boolean;
        "checked"?: boolean;
        "dirname"?: boolean;
        /**
          * HTML attributes to pass to the input element
         */
        "htmlAttributes"?: any;
        /**
          * HTML types for an input element
         */
        "type"?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
        "uuid"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "xxx-component": XxxComponent;
        "xxx-input": XxxInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "xxx-component": LocalJSX.XxxComponent & JSXBase.HTMLAttributes<HTMLXxxComponentElement>;
            "xxx-input": LocalJSX.XxxInput & JSXBase.HTMLAttributes<HTMLXxxInputElement>;
        }
    }
}