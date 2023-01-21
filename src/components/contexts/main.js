import React from 'react';
import PropTypes from 'prop-types';

export const MainContext = React.createContext({});

export function MainContextProvider({ children }) {
  return (
    <MainContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{}}
    >
      {children}
    </MainContext.Provider>
  );
}

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
