import React from 'react';

const Card = ({ name, email, id, phone }) => {
  return (
    <div className='tc grow bg-light-green bw2 ba bw2 br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' className='ba bw1' src={`https://robohash.org/${id}?set=any`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default Card;
