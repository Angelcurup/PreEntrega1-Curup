import Nav from "./components/NavBarComponent/NavBarComponent";
import ItemList from "./components/ItemListComponent/ItemListComponent";

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
