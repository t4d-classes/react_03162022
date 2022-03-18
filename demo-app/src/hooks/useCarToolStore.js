import { useState } from 'react';

import { useList } from './useList';

const carsList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 120000 },
];

export const useCarToolStore = () => {

  const [ cars, appendCar, replaceCar, removeCar ] = useList([ ...carsList ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = newCar => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => setEditCarId(-1);

  return {
    cars, editCarId, editCar: setEditCarId,
    cancelCar, addCar, saveCar, deleteCar,
  };



};