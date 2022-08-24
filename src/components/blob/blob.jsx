import styles from './blob.module.css'

export default function Blob() {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1051 981">
    //   <path fill="currentColor" fillRule="evenodd" d="M580.037 4.746C691.073 29.954 735.913 153.619 806.56 243.019c92.636 117.225 251.06 206.732 243.19 356.116-8.53 161.67-127.327 324.341-281.61 372.674-143.784 45.041-265.927-99.821-405.005-157.574-107.331-44.57-240.367-41.488-305.853-137.613-68.531-100.596-72.132-237.494-26.729-350.579 41.467-103.284 152.88-146.577 248.864-202.701C376.118 66.798 470.909-20.029 580.037 4.746Z" clipRule="evenodd"/>
    // </svg>
    <object className={styles.blob} type="image/svg+xml" data="./blob.svg"></object>
  )
}
