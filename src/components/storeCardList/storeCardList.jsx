import { createSignal } from 'solid-js'
import { placeholderStores } from '../../placeholderStores'
import { useParams, useSearchParams } from '@solidjs/router'

import StoreCard from '../storeCard/storeCard'
import styles from './storeCardList.module.css'
import StoreDetail from '../storeDetail/storeDetail'

const StoreCardList = (props) => {

  const [ fetchedStores, setFetchedStores ] = createSignal([])

  const [searchParams, setSearchParams] = useSearchParams()
  const coordinates = `${searchParams.lat},${searchParams.lng}`

  const fetchStores = () => {

    const storeCount = '50'
    const radius = '1600'
    const categories = [
      '13035', // Coffee Shop
      // '13034', // Cafe
    ]
    const excludedChains = [
      'ab4c54c0-d68a-012e-5619-003048cad9da', // Starbucks
      '2cb519f8-883c-4263-860a-cd83325fbb97', // Dunkin
      '993a7103-b601-4855-8737-cfe780dc4392', // Caribou
      'e60a5d2d-6e9e-4d3b-bfe4-5cebfc0c3d97', // Peets
      '229a19bd-9eb7-43ee-be2f-f4fd9ca76b79', // Coffee Bean and Tea Leaf 
      '2fc8d230-9c63-0132-6632-3c15c2dde6c8', // Costa Coffee
      'f4261794-a1ea-47ae-a9a6-981b8965bcb1', // Dutch Bros
      'd3ff39a7-7e6f-4c0c-a16f-9ee16b460d4f', // Gloria Jeans
      'bac38b5e-5736-11e5-b5b5-3c15c2dde6c8', // Highlands Coffee
      'e660cf56-6ec0-4df8-bc23-0868ebdda685', // JCo Coffee and Donuts
      'f71cb41f-e96f-4bb8-9bc8-91edf32c0ed6', // Old Town White Coffee (Def not racist)
      '4e4ae03e-af8e-46a7-96ea-f71871faadb0', // Philz
      '7fa42600-d890-0132-61d1-7a163eb2a6fc', // Italian Coffee Company
      'd5719cc0-d890-0132-61d3-7a163eb2a6fc', // Tim Hortons
      'ab4a3530-d68a-012e-5619-003048cad9da', // McDonalds
    ]
    const url = `https://api.foursquare.com/v3/places/search?ll=${coordinates}&radius=${radius}&categories=${categories.toString()}&sort=RATING&limit=${storeCount}&fields=name,fsq_id,rating,tips,photos,location,geocodes&exclude_chains=${excludedChains.toString()}`

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
    // .then(data => console.log(data))
    .then(res => setFetchedStores(res.results))
    .catch(err => console.log(err))
  }

  fetchStores()

  return (
    <>
    <div class={styles.storeCardList}>
      <div className={styles.resultsHeader}>
        <h5>Your Shops</h5>
        <p className={styles.resultsCount}>{fetchedStores().length} Results</p>
      </div>
      <div className={styles.storeCards}>
        {fetchedStores().map((store) => {
          return <StoreCard
            key={store.fsq_id}
            id={store.fsq_id}
            address={store.location.address}
            lat={store.geocodes.main.latitude}
            lng={store.geocodes.main.longitude}
            name={store.name}
            images={store.photos}
            tips={store.tips}
            mode="search"
          />
        })}
      </div>
    </div>
    
    </>
  )
}

export default StoreCardList