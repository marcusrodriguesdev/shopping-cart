import {
  Card, CardContent, CardHeader, Box, Typography, CardActions,
} from '@mui/material';
import React, { useContext } from 'react';
import Input from '../Input';
import Context from '../../context/Context';

function CardProduct({
  price, name, onChange, value, product, disabled, checked,
}) {
  const { isLoading } = useContext(Context);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (

    <Card className="Card">
      <CardHeader
        title={product}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{
          align: 'center',
        }}
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]),
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary">
            { `R$ ${price}` }
          </Typography>
        </Box>
        <Typography align="center" component="p" fontSize="16px" color="gray">
          + DETALHES
        </Typography>
      </CardContent>
      <CardActions>
        <Input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
      </CardActions>
    </Card>
  );
}

export default CardProduct;
