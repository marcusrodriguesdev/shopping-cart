import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestPlanInternet from '../services';
import Context from './Context';

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [internetState, setInternetState] = useState({});
  const [fixoState, setFixoState] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const response = await requestPlanInternet();
      setIsLoading(false);
      const { internet, fixo } = response;
      setFixoState(fixo);
      setInternetState(internet);
    }
    fetchApi();
  }, []);

  const context = {
    fixoState,
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
