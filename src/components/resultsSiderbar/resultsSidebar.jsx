import styles from './resultsSidebar.module.css'
import { Link, useSearchParams } from '@solidjs/router';
// import { mode, setMode } from "../../App";
import { useMode } from "../../context/modeContext"

function ResultsSidebar(props) {

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.query
  const [appMode] = useMode()

  return (
    <aside className={styles.resultsSidebar}>
      <div className={styles.sidebarText}>
        <h2>{query}</h2>
        {appMode() === 'train' ? (
          <Link href="/train">Search Training Data</Link>
          ) : <Link href="/">Search Again</Link>
        }
        
        
      </div>
      <div className={styles.filterListWrapper}>
        <div className={styles.filterList}>
          {/* {filters.map((filter, i) => {
            return <button key={`${filter}-${i}`} className={`${styles.filterButton} heading6`} onClick={((e) => toggleFilter(e))}>{filter}<Plus /></button>
          })} */}
        </div>
      </div>
    </aside>
  );
}

export default ResultsSidebar;