import PropTypes from 'prop-types'; // 1. Añadir los proptypes

export const GifItem = ({ title, url }) => { 

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

/*
Tarea: 
1. Añadir el PropTypes (no conseguida)
  a. titulo obligatorio
  b. rul obligatorio
2. Evaluar el snapshot
*/

// 2. hacer obligatorios los titulos u las url
GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}