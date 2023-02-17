import React from 'react';
import { useParams } from 'react-router-dom';

const Details = (props) => {
  const {id} = useParams();
  const listing = props.listings.find(l => l.id === id)

  return (
    <div style={{marginTop: '20px', color: 'black', border: '2px solid black', marginLeft: 'auto', marginRight: 'auto', width: '50vw', textAlign: 'center'}}>
      <h1>{listing.name}</h1>
      <h3>{listing.address}</h3>
      <h3>{listing.hours.open} - {listing.hours.close}</h3>
      <p>{listing.description}</p>
    </div>
  )

}


export default Details