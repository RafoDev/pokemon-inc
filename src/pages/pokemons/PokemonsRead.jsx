import PokemonsCard from "../../components/pokemons/PokemonsCard";
import usePokemons from "../../hooks/usePokemons";

const PokemonsRead = () => {
    const { pokemons } = usePokemons();
    return (
        <section className="py-8 text-center">
            <h2 className="font-mono mb-7 font-bold text-amber-400 text-4xl">Pokémons</h2>
            <div className="flex flex-row flex-wrap justify-center gap-8 container mx-auto px-8 md:px-4">
                {
                    pokemons.length ? (pokemons.map(pokemon => {
                        return (<PokemonsCard
                            key={pokemon._id}
                            pokemon={pokemon}
                        />);
                    }
                    )) : (

                        <div className="font-mono w-80 flex flex-col justify-between pb-7 border-2 border-slate-600 rounded">
                            <h2 className="w-full border-b-2 border-slate-600 bg-slate-700 py-2 text-center font-semibold text-2xl">{'name'}</h2>
                            <div className="flex flex-col gap-2 p-7 text-center">
                                <img src={`http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png`} alt={'pika'} className="w-full h-28 object-contain blur-md" />
                                <h3 className="text-slate-200" >{'type'}</h3>
                                <div className="flex flex-wrap justify-center gap-2 mb-3">
                                    <div className="bg-slate-400 text-slate-900 font-semibold px-3 rounded-lg text-sm">{'attack'}</div>
                                    <div className="bg-slate-400 text-slate-900 font-semibold px-3  rounded-lg text-sm">{'special'}</div>
                                </div>
                                <div className="flex gap-2">
                                    <h3 className="">HP</h3>
                                    <meter className="w-full h-6 -z-10" value={100} min="0" low="40" high="160" max="250"></meter>
                                </div>
                            </div>
                            <div className="flex justify-evenly ">
                                <button className="bg-cyan-300 text-slate-900 font-semibold px-3 py-1 rounded-xl">Update</button>
                                <button className="bg-red-600 text-slate-50 font-semibold px-3 py-1 rounded-xl">Remove</button>
                            </div>
                        </div>

                    )
                }
            </div>
        </section>
    );
}

export default PokemonsRead;