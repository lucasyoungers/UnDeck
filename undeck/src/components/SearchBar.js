import "./css/SearchBar.css";
import "./svg/SearchSVG.js";
import SearchSVG from "./svg/SearchSVG";

function SearchBar() {
  return (
    <form className="header__search">
      <input className="header__search__bar" type="text" placeholder="Search by Card Name" />
      <button className="header__search__button btn" type="submit">
        <SearchSVG />
      </button>
    </form>
  )
}

export default SearchBar;