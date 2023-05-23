import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './signUp';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
store.dispatch = jest.fn();

test('renders app', () => {
    render(
        <Provider store={store}>
            <SignUp />
        </Provider>
    );
});
