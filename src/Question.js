import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({question}) => {
  const [show, setShow] = useState(false)

  const {id, title, info} = question;

  return (  <article className="question">
              <header>
                <h4>{title}</h4>
                <button onClick={() => {setShow(!show)}} className="btn">{show ? <AiOutlineMinus/> : <AiOutlinePlus/> }</button>
              </header>
              <p>{show ? info : info.substring(0, 70)}</p>
            </article>
          );
};

export default Question;
