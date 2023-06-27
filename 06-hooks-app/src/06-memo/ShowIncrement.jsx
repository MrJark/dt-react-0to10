

// prop que recibo como argumento, increment, es la que necesito en el callback hook ya que de esta dependerá el increment
export const ShowIncrement = ({increment}) => {

  return (
    <button 
        className="btn btn-primary"
        onClick={ () => {
            increment();
        }}
    >
        Increment
    </button>
  )
};