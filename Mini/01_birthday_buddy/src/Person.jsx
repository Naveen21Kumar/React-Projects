import React from 'react';

const Person = ({ person, removeUser }) => {
  const { image, id, age, name } = person;
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button className='btn m-1' onClick={() => removeUser(id)}>
          Remove
        </button>
      </div>
    </article>
  );
};

export default Person;
