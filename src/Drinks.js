import { NavLink } from "react-router-dom";

const Drinks = () => {
  return (
    <div className='drinks box'>
      <h1>YOU GOT COKE!</h1>
      <img
        className='coke'
        src='https://mpng.subpng.com/20190622/kxt/kisspng-fizzy-drinks-diet-coke-the-coca-cola-company-coca-cola-png-transparent-images-pictures-photos-5d0edcb7898ad7.1015748915612550955634.jpg'
      />
      <div></div>
      <NavLink exact to='/'>
        Back to Machine!
      </NavLink>
    </div>
  );
};

export default Drinks;
