import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext } from 'react';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Item({ id, name, description, image }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/*<CardMedia sx={{ height: 140 }} image={image} title="green iguana">*/}
      <img src={image} alt={name} className="w-dvw h-44" />
      {/*</CardMedia>*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => addItemToCart(id)}>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
