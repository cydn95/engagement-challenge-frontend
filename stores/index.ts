import { configureStore } from '@reduxjs/toolkit';
import { gameApi } from 'services/game';
import requestTool from 'shared/tools/request';

const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(gameApi.middleware, requestTool.rtkQueryErrorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
