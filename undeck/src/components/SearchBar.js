import { useNavigate } from "react-router-dom"
import "./css/SearchBar.css";
// import "./svg/SearchSVG.js";
import SearchSVG from "./svg/SearchSVG";

function SearchBar() {
  const navigate = useNavigate()
  return (
    <form className="header__search">
      <input className="header__search__bar" type="text" placeholder="Search by Card Name" />
      <button
        className="header__search__button btn"
        type="submit"
        onClick={e => {
          e.preventDefault()
          navigate({
            pathname: "/",
            search: `?name=${document.querySelector(".header__search__bar").value}`
          });
        }}
      >
        <SearchSVG />
      </button>
    </form>
  )
}

export default SearchBar;