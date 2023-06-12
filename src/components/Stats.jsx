
export const Stats = ({stats}) => {
  return (
    <div className="stats-container mt-3">
        <ul className="list-group list-group-flush">
            {
            stats?.map( (stat, i) =>(
                <li 
                className="list-group-item d-flex justify-content-between align-items-center" 
                key={ i }
                >
                    <span> <strong>{ stat.stat.name }</strong></span>
                    <span>{ stat.base_stat}</span>
                </li>
            ))
            }
        </ul>
    </div>
  )
}
