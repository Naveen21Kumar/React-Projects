import { useState } from 'react';
import Form from './Form';
import Items from './Items';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

// same get local storage with 1 liner code
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(getLocalStorage);

  const addItem = (itemName) => {
    const newItem = {
      completed: false,
      name: itemName,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to list');
  };

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success('Item deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-right' />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
