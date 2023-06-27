import { memo } from 'react'; // está importación es la que le dice a react que memo(rice) el componente y no vuelva a recargar la página


export const Small = memo(({ value }) => {

    console.log('Log');
  return (
    <small>{ value }</small>
  )
});
