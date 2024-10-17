import { configureStore } from '@reduxjs/toolkit';
import { api } from '../../shared/api/api';
import themeReducer from '../../shared/model/theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
