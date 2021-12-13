import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar'>
      <NavLink exact to='/'>
        {/**Navlinks are <a></a> on the DOM */}
        Vending Machine
      </NavLink>
      <NavLink exact to='/drinks'>
        Drinks
      </NavLink>
      <NavLink exact to='/meals'>
        Meals
      </NavLink>
      <NavLink exact to='/candies'>
        Candies
      </NavLink>
    </nav>
  );
};

export default NavBar;
