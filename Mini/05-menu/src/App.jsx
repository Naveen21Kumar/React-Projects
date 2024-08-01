import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

// const tempCategories = menuItem.map((menu) => menu.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

// alternate approach - Single line code
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <div>
      <main>
        <section className='menu'>
          <Title text='our menu' />
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItem} />
        </section>
      </main>
    </div>
  );
};
export default App;
