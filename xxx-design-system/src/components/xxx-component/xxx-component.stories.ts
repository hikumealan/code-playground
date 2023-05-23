export default {
  title: 'Components/XXX-Component',
  argTypes: {
    type: {
      description: 'HTML types for an input element',
      defaultValue: 'text',
      table: {
        defaultValue: { summary: 'text' },
      },
      options: ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'],
      control: { type: 'select' }
    },
    htmlAttributes: {
      description: 'HTML attributes to pass to the input element',
      defaultValue: 'none',
      table: {
        type: { summary: 'HTML attributes to pass to the input element' },
        defaultValue: { summary: 'none' },
      }
    },
    backgroundColor: { control: 'color' },
    label: { control: 'date' },
    onClick: { action: 'onClick' },
    primary: {
      control: 'boolean',
      table: {
        type: { summary: 'type is boolean' },
        defaultValue: { summary: false },
      }
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
}

const Template = (args) => `<xxx-component type="${args.type}" theme="${args.theme}" htmlAttributes="${args.htmlAttributes}">${args.slot}</xxx-component>`;

export const Example = Template.bind({});
Example.args = {
  type: 'text',
  theme: '',
  slot: '<h1>Hello World!</h1>',
  primary: false
};
