import Nav from "./components/NavBArComponent/NavComponent";
import ItemList from "./components/ItemListContainer/ItemList";

function App() {
  return (
    <>
      <div>
        <Nav />
        <ItemList greeting="Hello welcome to my store!!" />
      </div>
    </>
  );
}

export default App;
