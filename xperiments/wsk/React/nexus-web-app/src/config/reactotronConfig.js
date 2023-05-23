import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

import { settings } from '@nexus-ui-starter-kit/core/config';

const { NODE_ENV } = settings;

// eslint-disable-next-line no-console
console.tron = Reactotron;

export default NODE_ENV === 'development'
    ? Reactotron.configure().use(reactotronRedux()).connect()
    : null;
