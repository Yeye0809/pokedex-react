
export const Types = ({types}) => {
  return (
    <div className="types-container ">
        {
        types?.map( (type, i) =>(
            <span key={ i }>{ type.type.name }</span>
        ))
        }            
    </div>
  )
}

