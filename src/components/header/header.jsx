import styles from './header.module.css'
import Logo from '../../assets/logo';
import { Link } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { useMode } from "../../context/modeContext"
// import { mode } from '../../App'

function Header() {

  const [appMode] = useMode();
  console.log(appMode())

  return (
    <nav class={styles.header}>
      <Link href='/' class={styles.logoLink}>
        <Logo />
      </Link>
      {appMode() === 'train' ?
      <div class={styles.trainModeBadge}>Training Mode</div> : null}
    </nav>
  );
}

export default Header;