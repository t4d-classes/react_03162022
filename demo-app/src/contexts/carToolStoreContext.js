import { createContext, useContext } from "react";

import {useCarToolStore } from '../hooks/useCarToolStore';


const carToolStoreContext = createContext();

const Provider = carToolStoreContext.Provider;

export const CarToolStoreProvider = (props) => {


  return (
    <Provider value={useCarToolStore()}>
      {props.children}
    </Provider>
  );

};


// consumer
export const useCarToolStoreContext = () => {

  return useContext(carToolStoreContext);

};

