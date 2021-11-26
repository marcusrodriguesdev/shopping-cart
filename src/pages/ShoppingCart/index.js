import React from 'react';
import { GlobalStyles } from '@material-ui/styled-engine';
import AppBar from '@mui/material/AppBar';
import { FaHome } from 'react-icons/fa';
import {
  Container, Link, Toolbar, Typography, CssBaseline,
} from '@mui/material';
import CardProduct from '../../components/CardProduct';
import { Cards } from './styles';

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
          // margin="0 0 25px 0"
        >
          Selecione um plano de Internet para continuar
        </Typography>
        <Cards>
          <CardProduct title="100MB" price="R$ 50,00" />
          <CardProduct title="150MB" price="R$ 100,00" />
          <CardProduct title="200MB" price="R$ 150,00" />
        </Cards>
      </Container>
      <Container component="main" maxWidth="md">
        <Typography
          className="space"
          component="h1"
          variant="h5"
          align="left"
          color="#A600FF"

        >
          Fixo
        </Typography>
        <Typography
          component="p"
          fontSize="18px"
          align="left"
          color="gray"
        >
          Agora escolha seu pacote de telefone fixo
        </Typography>
        <Cards>
          <CardProduct title="Ilimitado Fixo brasil" price="R$ 49,99" />
        </Cards>
      </Container>
      <Container component="main" maxWidth="md">
        <Typography
          className="space"
          component="h1"
          variant="h5"
          align="left"
          color="#A600FF"

        >
          TV
        </Typography>
        <Typography
          component="p"
          fontSize="18px"
          align="left"
          color="gray"
        >
          Agora escolha seu pacote de telefone fixo
        </Typography>
        <Cards>
          <CardProduct title="Full HD" price="R$ 199,99" />
          <CardProduct title="Ultimate HD" price="R$ 299,99" />
        </Cards>
      </Container>
    </React.Fragment>
  );
}

export default ShoppingCart;
