import {
  Card, CardContent, CardHeader, Grid, Box, Typography, Button, CardActions,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function CardProduct({ title, subheader, price }) {
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
          <Button fullWidth color="secondary" variant="outlined">
            SELECIONAR
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  title: PropTypes.number.isRequired,
  subheader: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
