import { createContext, useContext } from "react";

import { useCarToolStoreAsync } from '../hooks/useCarToolStoreAsync';


const carToolStoreContext = createContext();

const Provider = carToolStoreContext.Provider;

export const CarToolStoreProvider = (props) => {


  return (
    <Provider value={useCarToolStoreAsync()}>
      {props.children}
    </Provider>
  );

};


// consumer
export const useCarToolStoreContext = () => {

  return useContext(carToolStoreContext);

};

