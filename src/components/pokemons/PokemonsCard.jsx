import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import usePokemons from "../../hooks/usePokemons";

const PokemonsCard = ({ pokemon }) => {
    const { _id, name, type, hp, attack, special, image } = pokemon;
    const { removePokemon } = usePokemons();

    const handleDelete = (_id) => {
        toast((t) =>
        (
            <div className="flex flex-col gap-2">
                <h5 className="text-lg font-medium text-center">¿Deseas eliminarlo?</h5>
                <div className="flex gap-2">
                    <button
                        className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-rose-600"
                        onClick={() => {
                            removePokemon(_id);
                            toast.dismiss(t.id);
                        }}
                    >
                        Eliminar
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-white"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        ),
            {
                icon: '❗',
                style: {
                    borderRadius: '1rem',
                    backgroundColor: '#20232a',
                    color: '#fff',
                    boxShadow: '0 0 0 0.125rem #8888, 0 0 0 0.25rem #8888'
                },
            }
        );
    };

    return (
        <div className="font-mono w-80 flex flex-col justify-between pb-7 border-2 border-slate-600 rounded">
            <h2 className="w-full border-b-2 border-slate-600 bg-slate-700 py-2 text-center font-semibold text-2xl">{name}</h2>
            <div className="flex flex-col gap-2 p-7 text-center">
                <img src={image.url} alt={name} className="w-full h-28 object-contain" />
                <h3 className="text-slate-200" >{type}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                    <div className="bg-slate-400 text-slate-900 font-semibold px-3 rounded-lg text-sm">{attack}</div>
                    <div className="bg-slate-400 text-slate-900 font-semibold px-3  rounded-lg text-sm">{special}</div>
                </div>
                <div className="flex gap-2">
                    <h3 className="">HP</h3>
                    <meter className="w-full h-6 -z-10" value={hp} min="0" low="40" high="160" max="250"></meter>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <Link to={`${_id}`} className="bg-cyan-300 text-slate-900 font-semibold px-3 py-1 rounded-xl">Update</Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-600 text-slate-50 font-semibold px-3 py-1 rounded-xl">Remove</button>
            </div>
        </div>
    );
}

export default PokemonsCard;