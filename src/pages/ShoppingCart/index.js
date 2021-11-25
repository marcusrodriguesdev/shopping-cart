import React from 'react';
import { GlobalStyles } from '@material-ui/styled-engine';
import AppBar from '@mui/material/AppBar';
import { FaHome } from 'react-icons/fa';
import {
  Container, Link, Toolbar, Typography, CssBaseline,
} from '@mui/material';
import CardProduct from '../../components/CardProduct';

function ShoppingCart() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{
        ul: {
          margin: 0, padding: 0, listStyle: 'none', fontFamily: 'roboto',
        },
      }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            fontWeigth="700"
          >
            M2 Center
          </Typography>
          <nav>
            <Link
              variant="button"
              color="#000"
              href="#aa"
            >
              <FaHome size={30} />
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Produtos
        </Typography>
      </Container>
      <Container component="main" maxWidth="md">
        <Typography
          component="h1"
          variant="h5"
          align="left"
          color="#A600FF"

        >
          Internet
        </Typography>
        <Typography
          component="p"
          fontSize="18px"
          align="left"
          color="gray"
          margin="0 0 25px 0"
        >
          Selecione um plano de Internet para continuar
        </Typography>
        <CardProduct title="100MB" price="R$ 50,00" />
      </Container>
    </React.Fragment>
  );
}

export default ShoppingCart;
