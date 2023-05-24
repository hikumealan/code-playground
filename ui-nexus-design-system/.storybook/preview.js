import './styles.scss';

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Angular',
        'React',
        'Web Components'
      ]
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const utils = {
  wc: {
    formatCode: (story) => story
  },
  angular: {
    formatCode: (story) => story
  },
  react: {
    formatCode: (story) => story.replace(new RegExp('class=', 'g'), 'className=')
  }
};
