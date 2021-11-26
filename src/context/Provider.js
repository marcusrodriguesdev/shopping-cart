import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestPlanInternet from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await requestPlanInternet();
      setData(response);
    }
    fetchApi();
  }, []);

  const context = {
    data,
    setData,
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
