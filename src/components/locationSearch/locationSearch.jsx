import SearchField from '../searchField/searchField'
import styles from './locationSearch.module.css'

const LocationSearch = (props) => {

  return (
    <div class={styles.locationSearch}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <SearchField mode={props.mode} />
    </div>
  )

}

export default LocationSearch