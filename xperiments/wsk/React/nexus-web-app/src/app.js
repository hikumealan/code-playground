import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'routes';
import { AuthProvider } from '@nexus-ui-starter-kit/core/auth';
import { ErrorBoundary } from '@nexus-ui-starter-kit/core/components';
import store, { persistor } from 'store';

/**
 * Application configuration. This default configuration is provided as reference. It can be used as-is
 * or you can modify to suit the needs of your application
 */
const App = () => (
    <React.StrictMode>
        {/* Redux application state provider */}
        <Provider store={store}>
            {/* Redux state persistence provider - requires react-redux Provider */}
            <PersistGate persistor={persistor}>
                {/* Capture and optionally log all JS errors */}
                <ErrorBoundary>
                    {/* Authentication provider - configured through .env */}
                    <AuthProvider store={store}>
                        <Routes />
                    </AuthProvider>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

export default App;
