import { createSlice } from '@reduxjs/toolkit';

export const initialSlice = createSlice({
    name: 'bootstrap',
    initialState: {},
    reducers: {
        initialize: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.initialized = true;
        }
    }
});

export const { initialize } = initialSlice.actions;

export default initialSlice.reducer;
