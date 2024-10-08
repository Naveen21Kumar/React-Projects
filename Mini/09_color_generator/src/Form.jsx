import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');
  const handleSumit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSumit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
