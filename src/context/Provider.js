import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestPlanInternet from '../services';
import Context from './Context';

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [internetState, setInternetState] = useState({});
  const [fixoState, setFixoState] = useState({});
  const [tvState, setTvState] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const response = await requestPlanInternet();
      setIsLoading(false);
      const { internet, fixo, tv } = response;
      setFixoState(fixo);
      setInternetState(internet);
      setTvState(tv);
    }
    fetchApi();
  }, []);

  const context = {
    fixoState,
    tvState,
    isLoading,
    internetState,
  };
  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
