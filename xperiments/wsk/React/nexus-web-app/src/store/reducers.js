import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import persistConfig from 'config/persistConfig';
import bootstrap from './bootstrapSlice';
import core from '@nexus-ui-starter-kit/core/store';

// If specific reducers are unnecessary for an implementation, simply remove the references here.
const { auth, account, individual, messaging } = core;

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        bootstrap,
        auth,
        account,
        individual,
        messaging
    })
);

export default rootReducer;
