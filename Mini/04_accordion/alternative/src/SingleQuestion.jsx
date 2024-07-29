import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActiveId = id === activeId;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => toggleQuestion(id)} className='question-btn'>
          {isActiveId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActiveId && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
