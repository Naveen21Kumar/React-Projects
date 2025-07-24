import React from 'react';
import Person from './Person';

const List = ({ people, removeUser }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person person={person} key={person.id} removeUser={removeUser} />
        );
      })}
    </section>
  );
};

export default List;
