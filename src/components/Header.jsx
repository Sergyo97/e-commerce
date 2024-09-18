import ThemeToggle from './ThemeToggle.jsx';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';
import Cart from './Cart.jsx';

export default function Header() {
  const [openCartModal, setOpenCartModal] = useState(false);
  const { items } = useContext(CartContext);

  function handleOpenCart() {
    setOpenCartModal((prevState) => !prevState);
  }

  return (
    <>
      <section className="flex flex-row justify-between items-center px-4">
        <h1 className="text-4xl">E-COMMERCE</h1>
        <div>
          <Cart openModal={openCartModal} closeModal={handleOpenCart}></Cart>
          <Button startIcon={<ShoppingCartIcon />} onClick={handleOpenCart}>
            {items.length}
          </Button>
          <ThemeToggle></ThemeToggle>
        </div>
      </section>
    </>
  );
}
