import { createSignal } from 'solid-js'
import Icon from '../../assets/icon'
import styles from './searchField.module.css'
import { mode } from '../../App'
import { useMode } from "../../context/modeContext"
import { useNavigate } from '@solidjs/router'
import { cities } from '../../api/cities'
import { Link } from '@solidjs/router'

const SearchField = (props) => {

  const navigate = useNavigate()
  
  let inputField
  const [ searchInput, setSearchInput ] = createSignal('')
  const [ searchMatches, setSearchMatches ] = createSignal([])
  const [appMode, { setSearch, setTrain }] = useMode();

  const getCoordinates = (query) => {

    let APIKey  = import.meta.env.VITE_MAPS_API
    let coordinateURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${APIKey}`
    fetch(coordinateURL)
      .then(res => res.json())
      .then(data => {
        return {
          lng: data.results[0].geometry.location.lng,
          lat: data.results[0].geometry.location.lat
        }
      })
      .then(coordinates => navigate(`/search?lat=${coordinates.lat}&lng=${coordinates.lng}&query=${query}`))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (appMode() === 'train') {
      getCoordinates(searchInput())
      clearSearch()
    }
  }

  const handleInput = (e) => {
    let fieldInput = e.target.value
    setSearchInput(fieldInput)

    let input = e.target.value
    if (fieldInput.length > 0) {
      let matches = cities.filter((city) => {
        return city.name.toLowerCase().includes(input.toLowerCase())
      })
      return setSearchMatches(matches)
    }
    return setSearchMatches([])

  }

  const clearSearch = () => {
    inputField.value = ''
    setSearchInput('')
    setSearchMatches([])
  }

  const handleBlur = (e) => {
    console.log(e)
    if (!inputField.contains(e.relatedTarget)) {
      return setSearchMatches([])
    }
  }

  return (
    <form class={styles.searchField} onSubmit={e => handleSubmit(e)}>
      <input class={styles.searchInput} ref={inputField} onInput={(e) => handleInput(e)} onBlur={(e) => handleBlur(e)} type="text" placeholder="Enter a City, ZIP, or Café Name..." />
      <input class={styles.submitButton} type="submit" value="Search" onSubmit={(e) => handleSubmit(e)}  />
      {searchInput().length > 0 ? 
        <button className={styles.fieldButton} onClick={(e) => clearSearch()}><Icon type="close" /></button> : 
        <button className={styles.fieldButton} onClick={(e) => handleSubmit(e)}><Icon type="search" /></button>
      }
      <div className={styles.resultsList}>
        {searchMatches().map((result, i) => {
          return (
          <a class={styles.resultItem} onClick={() => getCoordinates(result.name)}>
            <h6 class={styles.resultText}>{result.name}</h6>
            <Icon type="arrow" />
          </a>
          )
        })}
      </div>
    </form>
  )
}

export default SearchField