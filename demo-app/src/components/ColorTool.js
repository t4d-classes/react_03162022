import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

import { useList } from "../hooks/useList";

export const ColorTool = (props) => {

  const [ colors, appendColor ] = useList([ ...props.colors ]);

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );

};