import { useState } from "react";
import Footer from "./components/Footer";
import GlobalRouter from './routes/GlobalRouter';
import { TiendaContext } from './context/TiendaContext';
import { useProductList } from './hooks/useProductList';

function App() {
  const [shoppingCart, setshoppingCart] = useState([]);
  const data = useProductList();

  const addCartItem = (item) => {
    setshoppingCart(prevItems => [...prevItems, item]);
  };

  return (
    <TiendaContext.Provider value={{...data, shoppingCart, addCartItem}}>
      <GlobalRouter></GlobalRouter>
      <Footer></Footer>
    </TiendaContext.Provider>
  );
}

export default App;
