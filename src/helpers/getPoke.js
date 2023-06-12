
export const getPoke = async(poke) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke.trim().toLowerCase()}`;
    const rep = await fetch(url);
    const data = await rep.json();

    return data
  }