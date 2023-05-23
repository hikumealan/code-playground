import localForage from 'localforage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: localForage,
    whitelist: ['auth'],
    stateReconciler: autoMergeLevel2
};

export default persistConfig;
