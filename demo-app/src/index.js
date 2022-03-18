import { render } from 'react-dom';

import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const colorToolHeaderText = "Color Tool";

render(
 <>
  <ColorTool headerText={colorToolHeaderText} colors={colorList} />
  <CarToolStoreProvider>
    <CarTool />
  </CarToolStoreProvider>
 </>,
 document.querySelector('#root'),
);
