import { useCallback } from 'react';
import { useForm } from '../hooks/useForm';

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [
    carForm, change, resetCarForm,
  ] = useForm({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const submitCar = useCallback(() => {
    onSubmitCar({ ...carForm });
    resetCarForm();
  }, [resetCarForm, onSubmitCar, carForm]);

  return (
    <>
    <form>
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
    </>
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};