import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setStore } from '@nexus-ui-starter-kit/core/store';
import { settings } from '@nexus-ui-starter-kit/core/config';
import ReactotronConfig from 'config/reactotronConfig';
import rootReducer from './reducers';

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const { NODE_ENV } = settings;

const store = configureStore({
    reducer: rootReducer,
    enhancers: [NODE_ENV === 'development' && ReactotronConfig.createEnhancer()].filter(Boolean),
    middleware: getDefaultMiddleware({
        serializableCheck: {
            // Ignore these action types
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp']
        }
    })
});

// Initializes store within core library for request interceptors and messaging
setStore(store);

export const persistor = persistStore(store);

export default store;
