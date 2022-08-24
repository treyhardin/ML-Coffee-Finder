import { createContext, createSignal, useContext } from "solid-js";

export const ModeContext = createContext();

export function ModeContextProvider(props) {
  const [appMode, setAppMode] = createSignal()
  const modeValues = [
    appMode,
    {
      setSearch() {
        console.log('setting search')
        setAppMode("search")
      },
      setTrain() {
        console.log('setting train')
        setAppMode("train")
      },
    },
  ];

  return (
    <ModeContext.Provider value={modeValues}>
      {props.children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
