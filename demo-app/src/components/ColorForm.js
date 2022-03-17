import { useState } from 'react';

export const ColorForm = (props) => {

  const [ colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  } /* initializes the state on the first render */);

  // const change = e => {

  //   // 1. make copy of the current state object
  //   const newColorForm = {
  //     ...colorForm,
  //   };

  //   // 2. Get the name and value of the color form property that needs to be updated
  //   const colorFormFieldName = e.target.name;
  //   const colorFormFieldValue = e.target.type === 'number'
  //     ? e.target.valueAsNumber : e.target.value;

  //   // 3. Update the new color form with the new value for the specified field
  //   newColorForm[colorFormFieldName] = colorFormFieldValue;

  //   // 4. Update the state and trigger the re-render
  //   setColorForm(newColorForm);

  // };

  const change = e => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });
  };

  const submitColor = () => {
  
    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: '', hexcode: '',
    });

  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label> 
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Form',
};