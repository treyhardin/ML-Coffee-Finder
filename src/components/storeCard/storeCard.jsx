import Icon from '../../assets/icon'
import styles from './storeCard.module.css'
import StoreDetail from '../storeDetail/storeDetail'
import { createSignal } from 'solid-js'
import { useMode } from "../../context/modeContext";
import StoreActions from '../storeActions/storeActions';




const StoreCard = (props) => {

  const [ detailsModal, toggleDetailsModal ] = createSignal(false)

  let storeCardRef
  const [appMode] = useMode();

  console.log(appMode())

  let storeData = {
    name: props.name,
    id: props.id,
    reviews: props.tips
  }

  const fetchStoreTips = (id) => {

    const storeCount = '50'
    const url = `https://api.foursquare.com/v3/places/${id}/tips`

    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: import.meta.env.VITE_FSQ_API
      }
    })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        console.log('Foursquare Fetch Error')
      }
    })
    .then(res => res.json())
    .then(data => storeData.reviews = data)
    .catch(err => console.log(err))
  }

  // fetchStoreTips(props.id)


  const postData = (data) => {

    let serverURL = 'http://localhost:3030/'

    fetch(serverURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => {console.log("Request complete! response:", res)})
  }

  const handleUpvote = () => {
    console.log('upvote')
    // storeData.rating = 1
    // postData(storeData)
    // storeCardRef.classList.add(styles.hidden)
  }

  const handleDownvote = () => {
    console.log('downvote')
    // storeData.rating = 0
    // postData(storeData)
    // storeCardRef.classList.add(styles.hidden)
  }

  const handleDetails = () => {
    toggleDetailsModal(true)
    // storeCardRef.classList.add(styles.hidden)
  }

  return (
    <>
    { detailsModal() ? (
      <StoreDetail 
        key={props.key}
        id={props.id}
        address={props.address}
        lat={props.lat}
        lng={props.lng}
        name={props.name}
        images={props.images}
        tips={props.tips}
        detailsModal={detailsModal}
        toggleDetailsModal={toggleDetailsModal}
      />
    ) : null }
    <div class={styles.storeCard} ref={storeCardRef}>
      <div class={styles.storeImages}>
        {props.images.map((image) => {
          return <img src={image.prefix + '800x800' + image.suffix} class={styles.storeImage} />
        })}
      </div>
      <div class={styles.storeDetails}>
        <h5>{props.name}</h5>
        <p>{props.address}</p>
        <StoreActions 
          id={props.id} 
          lat={props.lat}
          lng={props.lng}
          tips={props.tips}
          toggleDetailsModal={toggleDetailsModal}
          detailsModal={detailsModal}
        />
      </div>
      
      

      {props.tips.length > 0 && appMode() === 'search' ? 
        <div class={styles.reviews}>
          <p class={styles.review}>{props.tips[0].text}</p>
        </div> : null}
    </div>
    </>
  )
}

export default StoreCard