import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import layoutAsideSlice from './features/dashboardAside';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [layoutAsideSlice.name]: layoutAsideSlice.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


setupListeners(store.dispatch)