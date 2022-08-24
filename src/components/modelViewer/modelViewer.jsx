import styles from './modelViewer.module.css'
import '@google/model-viewer'

export default function ModelViewer() {

  let modelRef

  let rotationSpeed = 0.0025
  let rotationY = 0
  let rotationZ = 0

  let rotationOffsetY = 0
  let rotationOffsetZ = 0

  const rotateModel = () => {
    modelRef.orientation = `0 ${0.2 + rotationOffsetY} ${rotationZ + rotationOffsetZ}`
  }

  let startTime = Date.now()
  let fps = 30
  let fpsInterval = 1000 / fps

  const animate = () => {

    let currentTime = Date.now()
    let elapsedTime = currentTime - startTime

    if (elapsedTime > fpsInterval) {
      startTime = currentTime - (elapsedTime % fpsInterval)
      rotationY += rotationSpeed
      rotationZ += rotationSpeed
      rotateModel()
    }

    requestAnimationFrame(animate)
    }

  animate()

  window.addEventListener('mousemove', (e) => {
    let mouseSensitivity = 0.0005
    rotationOffsetY = e.clientY * mouseSensitivity
    rotationOffsetZ = e.clientX * mouseSensitivity
  })

  window.addEventListener('DOMContentLoaded', (e) => {
    modelRef.addEventListener('load', (e) => {
      modelRef.classList.add(styles.loaded)
    })
  })
  
    
  return (
    <>
    <div className={styles.modelContainer}>
      <model-viewer
        className={styles.model}
        src='./coffeeCup.glb'
        alt="Coffee Mug"
        exposure="0.8"
        environment-image="neutral"
        reveal="auto"
        ref={modelRef}
      >
      </model-viewer>
    </div>
    </>
  )
}