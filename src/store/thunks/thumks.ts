import { setPokemons, startLoading } from "../slice/pokemonSlice";
import { AppDispatch, RootState } from "../store";

export const getPokemons = (page: number = 0) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startLoading());
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const response = await data.json();
    dispatch(setPokemons({ page: page + 1, pokemon: response.results }));
    console.log(response);
  };
};
