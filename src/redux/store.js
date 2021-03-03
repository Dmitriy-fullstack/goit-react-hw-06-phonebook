import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import phoneBookReducer from "./phoneBookReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "old",
  storage,
};

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistore = persistStore(store);

export default { store, persistore };
