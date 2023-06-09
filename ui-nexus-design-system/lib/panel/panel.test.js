import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '.';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../utils/config');

const location = {
  pathname: '/1.2.0/',
  hash: '',
  search: ''
};

describe('Panel', () => {
  it('renders correctly, no versions', () => {
    const storybook = {
      getQueryParam: () => 'false',
      setQueryParams: () => {}
    };

    const tree = mount(<Panel storybook={storybook} location={location} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders versions', async () => {
    const storybook = {
      getQueryParam: () => 'false',
      setQueryParams: () => {}
    };

    const wrapper = await shallow(<Panel storybook={storybook} location={location} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
