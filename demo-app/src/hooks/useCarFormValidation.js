import { useForm } from './useForm';

export const useCarFormValidation = (initialForm) => {

  const [ carForm, change, resetCarForm ] = useForm(initialForm);

  const validationMessages = [];

  if (carForm.make === "") {
    validationMessages.push("Please enter a make.");
  }

  if (carForm.model === "") {
    validationMessages.push("Please enter a model.");
  }

  return {
    carForm, change, resetCarForm, validationMessages,
  };

}