import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={props.colors} />
      <ColorForm />
    </>
  );

};