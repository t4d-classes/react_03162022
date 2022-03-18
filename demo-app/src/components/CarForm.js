import { memo, useCallback } from 'react';
import { useCarFormValidation } from '../hooks/useCarFormValidation';

export const CarForm = memo(({ buttonText, onSubmitCar }) => {

  const {
    carForm, change, resetCarForm,
    validationMessages,
  } = useCarFormValidation({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const submitCar = useCallback(() => {
    if (validationMessages.length > 0) {
      return;
    }
    onSubmitCar({ ...carForm });
    resetCarForm();
  }, [validationMessages, resetCarForm, onSubmitCar, carForm]);

  return (
    <>
    {(validationMessages.length > 0) && <ul>
      {validationMessages.map((msg, i) => <li key={i}>{msg}</li>)}
    </ul>}
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

});

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};