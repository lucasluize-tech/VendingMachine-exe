import { useState } from "react";
import { NavLink } from "react-router-dom";

const Meals = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='meals box'>
      <h1>Hmm chips!</h1>
      <p>Bags eaten: {count} </p>
      <button className='eat' onClick={() => setCount((count) => count + 1)}>
        NOM NOM NOM
      </button>
      <div></div>
      <NavLink exact to='/'>
        Back to Machine!
      </NavLink>
    </div>
  );
};

export default Meals;
