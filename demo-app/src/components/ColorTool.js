import { ToolHeader } from "./ToolHeader";

export const ColorTool = (props) => {

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};