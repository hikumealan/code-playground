import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AccountSummary from './accountSummary';

const mockStore = configureMockStore();
const store = mockStore({
    individual: {
        current: {},
        individuals: [],
        isLoading: false
    },
    account: {
        current: {},
        accounts: [],
        isLoading: false
    }
});
store.dispatch = jest.fn();

test('renders Account Summary', () => {
    render(
        <Provider store={store}>
            <AccountSummary />
        </Provider>
    );
});
