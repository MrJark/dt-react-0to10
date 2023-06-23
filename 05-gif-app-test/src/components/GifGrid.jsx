import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {


  const { images, isLoading } = useFetchGifs( category );
  

  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h4>Loading...</h4>) 
        }
        <div className="card-grid">
          {
            
            images.map( ( image ) => (
              <GifItem 
                key={image.id}
                {  ...image }
              />
            ))
          }

          </div>     

    </>
  )
};

// proptipes por la category, de la que depende el componente
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}