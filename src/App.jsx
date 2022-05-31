import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonsProvider } from "./context/PokemonsContext";
import PokemonsLayout from "./layout/PokemonsLayout";
import PokemonsCreate from "./pages/pokemons/PokemonsCreate";
import PokemonsRead from "./pages/pokemons/PokemonsRead";
import PokemonsUpdate from "./pages/pokemons/PokemonsUpdate";
import Pokemons404 from "./pages/Pokemons404";

function App() {
  return (
    <PokemonsProvider>
      <Toaster />
      <Routes>
        <Route path='/' element={<Navigate to="/pokemons" replace="true" />} />
        <Route path='/pokemons' element={<PokemonsLayout />}>
          <Route path='create' element={<PokemonsCreate />} />
          <Route path=':id' element={<PokemonsUpdate/>} />
          <Route index element={<PokemonsRead/>}/>
        </Route>
        <Route path="*" element={<Pokemons404/>} />
      </Routes>
    </PokemonsProvider>
  );
}

export default App;
