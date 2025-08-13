import "./Header.scss";

import logo from "../../assets/mfs-logo.jpg";
import logoNew from "../../assets/logo/mfs-logo-new-white.svg";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="header-nav left">
            <ul className="header-nav-list">
              <li className="header-nav-item">About</li>
              <li className="header-nav-item">Skills</li>
              <li className="header-nav-item">Projects</li>
            </ul>
          </div>
          <div className="header-logo">
            <a href="">
              <img src={logoNew} alt="mfs portfolio logo" />
            </a>
          </div>
          <div className="header-nav right">
            <ul className="header-nav-list">
              <li className="header-nav-item">Linkedin</li>
              <li className="header-nav-item">Github</li>
              <li className="header-nav-item">
                <button className="theme-toggle" onClick={toggleDarkMode}>
                  {darkMode ? "🌙" : "☀️"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
