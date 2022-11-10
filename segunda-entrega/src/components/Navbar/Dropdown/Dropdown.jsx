
const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menú
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Pizzas
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Hamburguesas
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                 Minutas
              </a>
            </li>
          </ul>
        </li>
    );
}

export default Dropdown;
