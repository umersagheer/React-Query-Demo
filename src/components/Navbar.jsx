import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 shadow-md shadow-blue-950">
      <ul className="flex justify-start space-x-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ SuperHeroes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
