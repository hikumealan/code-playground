export default {
  title: 'Components/XXX-Input',
  argTypes: {
    appearance: {
      options: ['browser', 'ios', 'md', 'none', ''],
      control: { type: 'select' }
    },
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
  },
}

const Template = (args) => {
//   let template = (`
// <xxx-input
//   _id="${args._id}"
//   _name="${args._name}"
//   uuid="${args.uuid}"
//   dirname="${args.dirname}"
//   type="${args.type}"
//   appearance="${args.appearance}"
//   alt="${args.alt}"
//   htmlAttributes="${args.htmlAttributes}"
// >
//   <!-- SLOT goes here -->
// </xxx-input>
// `);
//   switch () {
//     case 'Angular':
//       //
//       template = ``;
//       break;
//     case 'React':
//       //
//       template = ``;
//       break;
//     default:
//       //
//       template = ``;
//       break;
//   }
  const onChange = () => {
    debugger;
  };
  const onInput = () => {
    debugger;
  };
  return (`
<xxx-input
  _id="${args._id}"
  _name="${args._name}"
  uuid="${args.uuid}"
  checked="${args.checked}"
  dirname="${args.dirname}"
  type="${args.type}"
  appearance="${args.appearance}"
  alt="${args.alt}"
  htmlAttributes="${args.htmlAttributes}"
  onchange={onChange}
  oninput={onInput}
>
  <!-- SLOT goes here -->
</xxx-input>
`);
};

export const Example = Template.bind({});
Example.args = {
  // config: {
  //   shadow: {
  //     elements: [
  //       {
  //         target: {
  //           getBy: '',
  //           selector: '',
  //         },
  //         props: [
  //           {
  //             id: '',
  //             name: ''
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   id: '',
  //   name: '',
  // },
  _id: '',
  _name: '',
  appearance: '',
  alt: '',
  uuid: '',
  type: 'text',
  dirname: true,
  checked: false,
  htmlAttributes: null
};
//
// export const Angular = Template.bind({});
// Angular.args = {
//   _id: '',
//   _name: '',
//   appearance: '',
//   alt: '',
//   uuid: '',
//   type: 'text',
//   dirname: true,
//   checked: false,
//   htmlAttributes: null
// };
//
// export const React = Template.bind({});
// React.args = {
//   _id: '',
//   _name: '',
//   appearance: '',
//   alt: '',
//   uuid: '',
//   type: 'text',
//   dirname: true,
//   checked: false,
//   htmlAttributes: null
// };
