import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

const initialState = {
    isOpen: false
}

const dashboardAsideSlice = createSlice({
    name: "dashboardAside",
    initialState,
    reducers: {
        toggleAsideDisplay(state, { payload }) {
            state.isOpen = payload;
        },
    },
})


export const getDashboardAsideState = (state: RootState) => state.dashboardAside

export const { toggleAsideDisplay } = dashboardAsideSlice.actions;
export default dashboardAsideSlice;