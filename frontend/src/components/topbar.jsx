import logo from '../assets/lynx-logo-nobg-black.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border border-bottom">
      <div className="container-fluid px-5">
        
        {/* LEFT: Logo + navigation */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="/">
            <img src={logo} alt="Lynx logo" height="60" />
          </a>

          <ul className="navbar-nav d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link" href="albuns">Albuns</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="playlists">Playlists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="songs">Songs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="add">Add</a>
            </li>
          </ul>
        </div>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CENTER + RIGHT */}
        <div className="collapse navbar-collapse" id="navbarContent">
          
          {/* CENTER: Search */}
          <form className="d-flex mx-auto my-3 my-lg-0" style={{ maxWidth: '420px', width: '100%' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="What do you want to listen?"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>

          {/* RIGHT: Profile */}
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="favorites">Favorite songs</a></li>
                <li><a className="dropdown-item" href="settings">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Topbar
