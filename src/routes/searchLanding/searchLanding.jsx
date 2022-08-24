import LocationSearch from "../../components/locationSearch/locationSearch";
import ModelViewer from "../../components/modelViewer/modelViewer";
// import { mode, setMode } from "../../App";
import { useMode } from "../../context/modeContext";

function SearchLanding() {

  const [appMode, { setSearch, setTrain }] = useMode();
  setSearch()
  // setMode('search')

  return (
    <>
    <LocationSearch
      title="Coffee Time, Baby"
      subtitle="Search the best coffee spots in the US."
      mode="search"
    />
    <ModelViewer />
    </>
  );
}

export default SearchLanding;