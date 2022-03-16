import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

render(
 // return React.createElement(HelloWorld);
 <HelloWorld />,
 document.querySelector('#root'),
);