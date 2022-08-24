import styles from './storeActions.module.css'
import { useMode } from "../../context/modeContext";
import Icon from '../../assets/icon'

function StoreActions(props) {

  const [appMode] = useMode();

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
    props.toggleDetailsModal(true)
    // storeCardRef.classList.add(styles.hidden)
  }

  return (
    <div class={styles.storeActions}>
      {appMode() === 'train' ? (
        <>
        <button class={styles.buttonUtility} onClick={() => handleUpvote()}><Icon type="thumbsup"/></button>
        <button class={styles.buttonUtility} onClick={() => handleDownvote()}><Icon type="thumbsdown"/></button>
        </> ) : null}
      <button class={styles.buttonUtility} onClick={() => window.open(`http://maps.google.com/maps?daddr=${props.lat},${props.lng}`, '_blank')}>
        <Icon type="pin"/>
      </button>
      {props.detailsModal ? (
        <>
        <button class={styles.buttonUtility} onClick={() => handleDetails()}><Icon type="info"/></button>
        </> ) : null}
      
    </div>
  );
}

export default StoreActions;