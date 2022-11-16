import {  NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gasco Components Test
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/button">Gasco botones</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/input"> Gasco Inputs </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/modal"> Gasco Modal </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/list"> Gasco List </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/autocomplete"> Gasco Autocomplete </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/card"> Gasco Card </NavLink>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
