import LocationSearch from "../../components/locationSearch/locationSearch";
import ModelViewer from "../../components/modelViewer/modelViewer";
import { mode, setMode } from "../../App";
import { useContext } from "solid-js";
import { useMode } from "../../context/modeContext";

function TrainLanding() {

  const [appMode, { setSearch, setTrain }] = useMode();
  setTrain()

  // setMode('train')

  return (
    <>
    <LocationSearch
      title="Train the Coffee AI"
      subtitle="Enter a good spot to train your subservient AI."
    />
    <ModelViewer />
    </>
  );
}

export default TrainLanding;