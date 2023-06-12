import { useState } from "react"

export const SearchPoke = ({setPokemon}) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleSubmit = ( event) => {
      event.preventDefault();

      if( inputValue.trim().length > 2 ) {
        setPokemon(inputValue);
        setInputValue('')
      }
    }

  return (
    <form onSubmit={ handleSubmit } className="mt-2">
        <input 
            type="text" 
            className="form-control"
            placeholder="Search Pokemon"
            value={ inputValue }
            onChange={ handleInputChange }    
        />
    </form>
  )
}

