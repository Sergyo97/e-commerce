import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './store/theme-context.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Item from './components/Item.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <CartContextProvider>
        <Header></Header>
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Item {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </div>
  );
}

export default App;
