const URL_INTERNET = 'https://my-json-server.typicode.com/marcusrodriguesdev/shopping-cart/produtos';

async function requestPlanInternet() {
  const requiriment = await fetch(URL_INTERNET)
    .then((resp) => resp.json());
  return requiriment;
}

export default requestPlanInternet;
