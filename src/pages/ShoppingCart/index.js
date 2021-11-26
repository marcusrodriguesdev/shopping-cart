import React, { useContext } from 'react';
import { GlobalStyles } from '@material-ui/styled-engine';
import AppBar from '@mui/material/AppBar';
import { FaHome } from 'react-icons/fa';
import {
  Container, Link, Toolbar, Typography, CssBaseline,
} from '@mui/material';
import CardProduct from '../../components/CardProduct';
import { Cards } from './styles';
import Footer from '../../components/Footer';
import Context from '../../context/Context';
// import Input from '../../components/Input';

function ShoppingCart() {
  const { data, isLoading } = useContext(Context);
  const { internet } = data;
  console.log(internet);

  if (isLoading) {
    return <div>Carregando...</div>;
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
          color="#005CC8"

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
        {/* { data.map(({ precosInternet, planosInternet }, index) => (
          <Cards key={index}>
            <CardProduct
              title={planosInternet}
              price={precosInternet}
              name="internet"
            />
          </Cards>
        )) } */}
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
            title="Ilimitado Fixo brasil"
            price="49,99"
            name="fixo"
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
            title="Full HD"
            price="199,99"
            name="tv"
          />
          <CardProduct
            title="Ultimate HD"
            price="299,99"
            name="tv"
          />
        </Cards>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default ShoppingCart;
