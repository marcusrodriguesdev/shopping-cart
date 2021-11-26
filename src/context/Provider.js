import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestPlanInternet from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [internetState, setInternetState] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await requestPlanInternet();
      setIsLoading(false);
      const { internet } = response;
      setData(response);
      setInternetState(internet);
    }
    fetchApi();
  }, []);

  const context = {
    data,
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
