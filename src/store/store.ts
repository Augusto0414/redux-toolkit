import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import pokemonSlice from "./slice/pokemonSlice";
import { todosApi } from "./RTK/todoApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonSlice,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;