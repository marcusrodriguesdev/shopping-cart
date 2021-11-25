import { Card, CardHeader, Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function CardProduct({ title, subheader }) {
  return (
    <Grid
      item
      key={title}
      xs={12}
      sm={title === 'Enterprise' ? 12 : 6}
      md={4}
    >
      <Card>
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
      </Card>
    </Grid>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  title: PropTypes.number.isRequired,
  subheader: PropTypes.string.isRequired,
};
