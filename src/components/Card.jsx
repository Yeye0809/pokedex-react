import { Stats } from "./Stats";
import { Types } from "./Types";

export const Card = ({pokeData}) => {

  const { data } = pokeData;

  const sprite = data?.sprites?.front_default;
  const { name, stats, types } = data;
  console.log({ name, stats, types })

  return (
    <div className="card border border-4 mt-3">
        <h2 className="card-title">{ name }</h2>
        <img  src={ sprite } alt={ name } />
        <div className="card-body">
          <Types types={types}/>
          
          <Stats stats={stats}/>
        </div>
      </div>
    
  )
}

