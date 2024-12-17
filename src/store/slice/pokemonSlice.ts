import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface pokemonState {
  page: number;
  pokemon: { name: string; url: string }[];
  isLoading: boolean;
}

const initialState: pokemonState = {
  page: 0,
  pokemon: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemo",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    setPokemons: (state, actions: PayloadAction<{ page: number; pokemon: { name: string; url: string }[] }>) => {
      console.log(state);
      state.isLoading = false;
      state.page = actions.payload.page ?? state.page;
      state.pokemon = actions.payload.pokemon ?? state.pokemon;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemons, startLoading } = pokemonSlice.actions;

export default pokemonSlice.reducer;
