import { mode, setMode } from "../../App";
import ResultsSidebar from "../../components/resultsSiderbar/resultsSidebar";
import StoreCardList from '../../components/storeCardList/storeCardList'

function SearchResults(props) {

  console.log(mode())

  return (
    <>
    <ResultsSidebar />
    <StoreCardList />
    </>
  );
}

export default SearchResults;