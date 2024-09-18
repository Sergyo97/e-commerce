import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Cart({ openModal, closeModal }) {
  const { items, updateItemQuantity } = useContext(CartContext);

  return (
    <Dialog open={openModal} onClose={closeModal} fullWidth="true">
      <DialogTitle>Shopping Cart</DialogTitle>
      <DialogContent>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex flex-row justify-around items-center gap-3">
              <span>{item.name}</span>
              <Button onClick={() => updateItemQuantity(item.id, -1)}>
                <RemoveIcon></RemoveIcon>
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={() => updateItemQuantity(item.id, 1)}>
                <AddIcon></AddIcon>
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
