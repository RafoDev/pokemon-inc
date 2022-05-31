import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/reactHotToast";

export const PokemonsContext = createContext();
export const PokemonsProvider = ({ children }) => {

  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false)


  const createPokemon = async (pokemon) => {
    try {
      setLoading(true);
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`
      }
      const { data } = await axios(options);
      setPokemons([...pokemons, data]);
      showToast('😀','Creado');
      navigate('/pokemons');
    } catch (error) {
      console.log(error.message.data.message);
    } finally{
      setLoading(false);
    }
  }

  const readPokemons = async () => {
    try {
      setLoading(true)
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons`
      }
      const { data } = await axios(options);
      setPokemons(data);
    } catch (error) {
      console.log(error.message.data.message);
    } finally{
      setLoading(false);
    }
  }
  const readPokemon = async (_id) => {
    try {
      setLoading(true)
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${_id}`
      }
      const { data } = await axios(options);
      showToast('✅','Leído');
      setPokemon(data);
    } catch (error) {
      console.log(error.message.data.message);
    } finally{
      setLoading(false);
    }
  }
  const removePokemon = async (_id) => {
    try {
      setLoading(true)
      const options = {
        method: "DELETE",
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${_id}`
      }
      const { data } = await axios(options);
      setPokemons(pokemons.filter(pokemon => pokemon._id !== _id));
      console.log(`Eliminando...`)
    } catch (error) {
      console.log(error.message.data.message);
    } finally{
      setLoading(false);
    }
  }

  const updatePokemon = async pokemon => {
    try {
      setLoading(true);
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_POKEMON_INC_MERN_API}/pokemons/${pokemon._id}`
      }
      const { data } = await axios(options);
      showToast('✏','Actualizado');
      setPokemons(pokemons.map((pokemon) => {
        return pokemon._id === data._id ? data : pokemon;
      }))
      navigate('/pokemons');
    } catch (error) {
      console.log(error.message.data.message);
    } finally{
      setLoading(false);
    }
  };



  const submitPokemonsForm = async (pokemon) => {
    if (pokemon._id === undefined) {
      await createPokemon(pokemon);
    }
    else {
      await updatePokemon(pokemon);
    }
  }

  useEffect(() => {
    readPokemons("");
  }, [])


  return (
    <PokemonsContext.Provider
      value={{ removePokemon, pokemons, readPokemons, readPokemon, pokemon, submitPokemonsForm, loading }}>
      {children}
    </PokemonsContext.Provider>
  );
}