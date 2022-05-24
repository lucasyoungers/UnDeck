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
          const bar = document.querySelector(".header__search__bar")
          const val = bar.value.trim()
          let search = `q=name:"*${val}*"`
          if (!val) return
          if (val === "N") search = `q=name:"N"`
          navigate({
            pathname: "/",
            search
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