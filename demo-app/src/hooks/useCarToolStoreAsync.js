import { useState, useEffect, useCallback } from 'react';

import { createApi } from '../services/apiData';

const carsData = createApi('cars');

export const useCarToolStoreAsync = () => {

  const [ cars, setCars ] = useState([]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = useCallback(async () => {
    const cars = await carsData.all();
    setCars(cars);
    setEditCarId(-1);
  }, []);

  const addCar = useCallback(async newCar => {
    await carsData.append(newCar);
    await refreshCars();
  }, [refreshCars]);

  const saveCar = useCallback(async car => {
    await carsData.replace(car);
    await refreshCars();
  }, [refreshCars]);

  const deleteCar = useCallback(async carId => {
    await carsData.remove(carId);
    await refreshCars();
  }, [refreshCars]);

  const cancelCar = useCallback(() => setEditCarId(-1), []);

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);

  return {
    cars, editCarId, editCar: setEditCarId,
    cancelCar, addCar, saveCar, deleteCar,
  };



};