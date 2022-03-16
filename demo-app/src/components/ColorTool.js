import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';

export const ColorTool = (props) => {

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={props.colors} />
    </>
  );

};