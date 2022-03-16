import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const colorToolHeaderText = "Color Tool";

const carsList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 120000 },
];

render(
 // return React.createElement(
   // ColorTool, { colors: colorList });
 <>
  <ColorTool headerText={colorToolHeaderText} colors={colorList} />
  <ColorTool headerText={colorToolHeaderText} colors={colorList} />
  <CarTool cars={carsList} />
 </>,
 document.querySelector('#root'),
);
