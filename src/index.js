import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URL = 'https://jsonplaceholder.typicode.com/photos';

ReactDOM.render(<App url={URL}/>, document.getElementById('root'));

serviceWorker.unregister();
