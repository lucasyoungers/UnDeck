import "./css/Header.css";
import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Nav from "./Nav.js";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header;