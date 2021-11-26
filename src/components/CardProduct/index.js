import {
  Card, CardContent, CardHeader, Box, Typography, CardActions,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

// import { Container } from './styles';

function CardProduct({
  title, subheader, price, name, onChange, value,
}) {
  return (

    <Card className="Card">
      <CardHeader
        title={title}
        subheader={subheader}
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
            { price }
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
        />
      </CardActions>
    </Card>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  subheader: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};
