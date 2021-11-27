import React, { useContext, useState } from 'react';
import { GlobalStyles } from '@material-ui/styled-engine';
import { FaHome } from 'react-icons/fa';
import {
  Container, Link, Toolbar, Typography, CssBaseline, AppBar,
} from '@mui/material';
import CardProduct from '../../components/CardProduct';
import { Cards } from './styles';
import Footer from '../../components/Footer';
import Context from '../../context/Context';

function ShoppingCart() {
  const {
    internetState, fixoState, tvState, setTvValue,
    setFixoValue, setInternetValue,
  } = useContext(Context);

  const { planoInternet1, planoInternet2, planoInternet3 } = internetState;
  const { planoFixo1 } = fixoState;
  const { planoTv1, planoTv2 } = tvState;

  const [validated, setValidated] = useState(true);

  function validatedButton({ value }, number) {
    if (value === number) {
      return setValidated(false);
    } return setValidated(true);
  }

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
          color="#005CC8"

        >
          Internet
        </Typography>
        <Typography
          component="p"
          fontSize="18px"
          align="left"
          color="gray"
        >
          Selecione um plano de Internet para continuar
        </Typography>
        <Cards>
          <CardProduct
            name="internet"
            product={planoInternet1}
            price="50,00"
            value={50}
            disabled={false}
            onChange={({ target }) => {
              validatedButton(target, '50');
              setInternetValue(target.value);
            }}
          />
          <CardProduct
            name="internet"
            product={planoInternet2}
            price="100,00"
            value={100}
            disabled={false}
            onChange={({ target }) => {
              validatedButton(target, '100');
              setInternetValue(target.value);
            }}
          />
          <CardProduct
            name="internet"
            value={150}
            onChange={({ target }) => {
              validatedButton(target, '150');
              setInternetValue(target.value);
            }}
            product={planoInternet3}
            price="150,00"
            disabled={false}
          />
        </Cards>
      </Container>
      <Container component="main" maxWidth="md">
        <Typography
          className="space"
          component="h1"
          variant="h5"
          align="left"
          color="#005CC8"

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
          <CardProduct
            product={planoFixo1}
            value={50}
            price="50,00"
            name="fixo"
            disabled={validated}
            onChange={({ target }) => {
              setFixoValue(target.value);
            }}
          />
        </Cards>
      </Container>
      <Container component="main" maxWidth="md">
        <Typography
          className="space"
          component="h1"
          variant="h5"
          align="left"
          color="#005CC8"
        >
          TV
        </Typography>
        <Typography
          component="p"
          fontSize="18px"
          align="left"
          color="gray"
        >
          Escolha um pacote de TV
        </Typography>
        <Cards>
          <CardProduct
            product={planoTv1}
            value={90}
            price="90,00"
            name="tv"
            disabled={validated}
            onChange={({ target }) => {
              setTvValue(target.value);
            }}
          />
          <CardProduct
            value={130}
            product={planoTv2}
            price="130,00"
            name="tv"
            disabled={validated}
            onChange={({ target }) => {
              setTvValue(target.value);
            }}
          />
        </Cards>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default ShoppingCart;
