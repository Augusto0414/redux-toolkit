import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/thunks/thumks';
import { AppDispatch, RootState } from './store/store';
export const Pokemon = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { page, isLoading, pokemon } = useSelector((state: RootState) => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch])

    return (
        <div>
            {isLoading && <p>Loading...</p>}

            {pokemon.map((pokemon) => (
                <div key={pokemon.url}>
                    <h2>{pokemon.name}</h2>
                </div>
            ))}

            {page > 1 && <button onClick={() => dispatch(getPokemons(page - 1))}>Previous</button>}
            <button onClick={() => dispatch(getPokemons(page))}>Next</button>

            {pokemon.length === 0 && <p>No more Pokemons</p>}

            {pokemon.length > 0 && <p>Page {page}</p>}

            {pokemon.length > 0 && <p>Total Pokemons: {pokemon.length}</p>}

            {pokemon.length > 0 && <p>Current Pokemons: {pokemon.slice(0, 10).length}</p>}

        </div>
    )
}
