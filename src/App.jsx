import styles from './App.module.css';
import { Routes, Route } from "@solidjs/router"
import SearchLanding from './routes/searchLanding/searchLanding';
import TrainLanding from './routes/trainLanding/trainLanding';
import SearchResults from './routes/searchResults/searchResults';
import Header from './components/header/header';
import Blob from './components/blob/blob';
import { createContext, createSignal } from 'solid-js';
import { ModeContextProvider } from './context/modeContext';

export const [mode, setMode] = createSignal()

// export const AppModeContext = createContext()

function App() {

  return (
    <div class={styles.App}>
      <ModeContextProvider>
      <Header />
      <main class={styles.content}>
        <Routes>
          <Route path="/" component={SearchLanding} />
          <Route path="/train" component={TrainLanding} />
          <Route path="/train/test" component={SearchLanding} />
          <Route path="/search" component={SearchResults} />
        </Routes>
      </main>
      <Blob />
      </ModeContextProvider>
    </div>  
  );
}

export default App;
