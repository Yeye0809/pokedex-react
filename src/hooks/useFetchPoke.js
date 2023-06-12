import { useEffect, useState } from "react"
import { getPoke } from "../helpers/getPoke";


export const useFetchPoke = ({pokemon}) => {
    const [ state, setState ] = useState({
      data: null,
      loadding: true,
    });

    useEffect(()=>{
      getPoke(pokemon)
      .then( poke => {
        setTimeout(() => {
            console.log(poke)
        }, 2000);
      })
    },[ pokemon ])

    return { 
      state
    }
}




