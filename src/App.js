import { useEffect, useState } from "react";
import { Card } from "./components";
import { SearchPoke } from "./components/SearchPoke";
import { getPoke } from "./helpers/getPoke";

function App() {

  const [pokemon, setPokemon ] = useState('Pikachu');
  const [pokeData, setPokeData ] = useState({
    data: {},
    loading: true
  });

  useEffect(()=>{
    getPoke(pokemon)
    .then(poke =>{
      setTimeout(()=>{
        setPokeData({
          data: poke,
          loading: false,
        });
      }, 2000 );
    })
  }, [pokemon]);

  useEffect(()=>{
    setPokeData({
      ...pokeData,
      loading: true
    })
  }, [ pokemon ])
  
  return (
    <>
      <div className="pokedex-container">
          <header>
            <h1>Pokedex</h1> 
          </header> 
          <div className="align-self-center">
            <SearchPoke setPokemon={ setPokemon }/>
          </div> 
          <div className="card-container">
            {
              pokeData.loading 
              ? <div className="alert alert-primary" role="alert">
                  <strong>looking for pokemon in the pokedex</strong>
                </div>
              : <Card pokeData={ pokeData }/>  
            }               
          </div>
      </div>
    </>
  );
}

export default App;
