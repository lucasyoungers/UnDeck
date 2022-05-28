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
          let nameTerms = []
          let terms = []
          bar.value.split(/\s+/).forEach(term => {
            if (term.split(":").length === 1) nameTerms.push(term)
            else terms.push(term)
          })
          if (nameTerms.length > 0) {
            let name = nameTerms.join(" ")
            if (name !== "N") name = `*${name}*`
            name = `name:"${name}"`
            terms.unshift(name)
          }
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