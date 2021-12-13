import { NavLink } from "react-router-dom";

const Candies = () => {
  return (
    <div className='candies box'>
      <h1>OMG SUGAR SUGAR SUGAR SUGAR SUGAR !!!!!!!! HYPEEEEEE </h1>
      <NavLink exact to='/'>
        Back to Machine!
      </NavLink>
    </div>
  );
};

export default Candies;
