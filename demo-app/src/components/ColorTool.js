

export const ColorTool = (props) => {

  const headerText = "Color Tool";



  return (
    <>
      <header>
        <h1>{headerText}</h1>
      </header>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};