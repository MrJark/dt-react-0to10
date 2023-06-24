import { useEffect, useState } from 'react';


export const Message = () => {

    const [coords, setCoords] = useState( { x: 0 , y: 0 } );


    //snippet del useEffect
    useEffect(() => {

        // 2º cuando ya hayas puesto segun que elemento, quieres que ese listener se desactive y para ello es lo siguiente
        const onMouseMove = ({x, y}) => {
            // const coords = { x, y };
            // console.log(coords);
            setCoords( { x, y } )
        }
      
        // 1º imaginas que queires saber donde está el mouse en el eje x e y en todo momento
        window.addEventListener('mousemove', onMouseMove );
    
      return () => {
        // 3º limpieza del componente una vez hecha su función
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h3>Usuario Existe</h3>
        
        {JSON.stringify(coords)}
        
    </>
    
  )
}
