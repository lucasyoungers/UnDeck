// Libraries
import { useNavigate } from "react-router-dom"

// Utils
import { parseTerms } from "../utils"

// Components
import SearchSVG from "./svg/SearchSVG"

// CSS
import "./css/SearchBar.css"

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
          const bar = document.querySelector(".header__search__bar")
          const terms = parseTerms(bar.value)
          navigate({
            pathname: "/",
            search: `q=${terms.join("+")}`
          })
          bar.value = ""
        }}
      >
        <SearchSVG />
      </button>
    </form>
  )
}

export default SearchBar