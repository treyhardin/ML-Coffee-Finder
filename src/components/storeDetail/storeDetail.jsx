import Icon from '../../assets/icon';
import StoreActions from '../storeActions/storeActions';
import styles from './storeDetail.module.css'

function StoreDetail(props) {

  const handleClose = (e) => {
    props.toggleDetailsModal(false)
  }

  const handleBackgroundClose = (e) => {
    if (e.target === e.currentTarget) {
      props.toggleDetailsModal(false)
    }
  }

  return (
    <div class={styles.detailModalWrapper} onClick={(e) => handleBackgroundClose(e)} > 
      <button class={styles.modalClose} onClick={(e) => handleClose(e)}><Icon type="close" /></button>
      <div class={styles.detailModal}>

        <div class={styles.detailText}>

          <h4>{props.name}</h4>
          <p>{props.address}</p>

          <StoreActions
            key={props.key}
            id={props.id}
            address={props.address}
            lat={props.lat}
            lng={props.lng}
            name={props.name}
            tips={props.tips}
          />

          {props.tips.length > 0 ? 
            <div class={styles.reviews}>
              <p class={styles.reviewsLabel}>Reviews</p>
              {props.tips.map((review) => {
                return <p class={styles.review}>{review.text}</p>
              })}
            </div> : null}


        </div>

        <div class={styles.storeImages}>
          {props.images.map((image) => {
            return <img src={image.prefix + '1280x1280' + image.suffix} class={styles.storeImage} />
          })}
        </div>

      </div>
    </div>
  );
}



export default StoreDetail;