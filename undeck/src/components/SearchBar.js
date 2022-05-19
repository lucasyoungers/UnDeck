// Libraries
import { useNavigate } from "react-router-dom"

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
          let bar = document.querySelector(".header__search__bar")
          let val = bar.value.trim()
          if (!val) return
          navigate({
            pathname: "/",
            search: `?name=${val}`
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