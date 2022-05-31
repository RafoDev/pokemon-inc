import { Link } from "react-router-dom";

const Pokemons404 = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-7 h-screen">
            <div className="font-bold text-gray-100 flex items-center">
                <p className="text-9xl">4</p>
                <figure className="w-36">
                    <img src="https://i.postimg.cc/br4X3zZV/pngwing-com.png" alt="Pokeball" />
                </figure>
                <p className="text-9xl">4</p>
            </div>
            <div className="flex flex-col items-center gap-1 mb-5">
                <p className="text-2xl font-semibold">Oh-oh!</p>
                <p className="text-xl text-gray-200">¡Al parecer te perdiste en tu viaje!</p>
            </div>
            
            <Link to={'/pokemons'} className="bg-red-600 px-4 py-2 text-xl rounded-3xl transition-colors hover:bg-red-500"> Regresar al Inicio</Link>
        </div>
    );
}

export default Pokemons404;