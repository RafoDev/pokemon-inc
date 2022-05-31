import PokemonsCard from "../../components/pokemons/PokemonsCard";
import usePokemons from "../../hooks/usePokemons";

const PokemonsRead = () => {
    const { pokemons } = usePokemons();
    return (
        <section className="py-8 text-center">
            <h2 className="font-mono mb-7 font-bold text-amber-400 text-4xl">Pokémons</h2>
            <div className="flex flex-row flex-wrap justify-center gap-8 container mx-auto px-8 md:px-4">
                {
                    pokemons.map(pokemon => {
                        return (<PokemonsCard
                            key={pokemon._id}
                            pokemon={pokemon}
                        />);
                    }
                    )
                }
            </div>
        </section>
    );
}

export default PokemonsRead;