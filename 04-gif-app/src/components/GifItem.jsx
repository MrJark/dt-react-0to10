

export const GifItem = ({ title, url }) => { // lo que necesitas para mostrar un gif es el titulo y el url 

    console.log({title, url});

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
