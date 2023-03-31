import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface DashboardAsideState {
    isOpen: boolean
}

const initialState: DashboardAsideState = {
    isOpen: false
}

const dashboardAsideSlice = createSlice({
    name: "dashboardAside",
    initialState,
    reducers: {
        toggleAsideDisplay(state, { payload }: PayloadAction<boolean>) {
            state.isOpen = payload;
        },
    },
})



export const { toggleAsideDisplay } = dashboardAsideSlice.actions;
export default dashboardAsideSlice;