import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore({});
const store = mockStore({
    individual: {
        individuals: []
    },
    account: {
        accounts: []
    }
});
store.dispatch = jest.fn();
test('renders app', () => {
    const element = render(
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    );
    expect(element);
});
