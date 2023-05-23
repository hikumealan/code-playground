import React from 'react';
import { render } from '@testing-library/react';
import Hero from './hero';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
store.dispatch = jest.fn();

test('renders app', () => {
    const element = render(
        <Provider store={store}>
            <Hero />
        </Provider>
    );
    expect(!element.navOpen);
});
