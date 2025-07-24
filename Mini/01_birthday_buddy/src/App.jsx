import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  const removeUser = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} removeUser={removeUser}></List>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => {
            setPeople([]);
          }}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
