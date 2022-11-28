import {
    configureStore,
    // combineReducers
} from "@reduxjs/toolkit";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { contactsReducer} from "redux/contacts/contactsSlice";
import { filterReducer } from "redux/filter/filterSlice";

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });
// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter']
// };
// const persistedReducer = persistReducer(
//     persistConfig,
//     rootReducer,
// );

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});