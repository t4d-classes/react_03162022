import { ToolHeader } from "./ToolHeader";
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import {
  useCarToolStoreContext as  useCarToolStore
} from '../contexts/carToolStoreContext';

export const CarTool = () => {

  const {
    cars, editCarId, editCar, cancelCar, addCar, saveCar, deleteCar
  } = useCarToolStore();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};