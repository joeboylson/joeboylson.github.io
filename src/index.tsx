import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const UseFetch = (url: string) => {
  
  let data = axios.get(`https://joeboylson-api.herokuapp.com${url}`).then(response => {
    return response.data
  }).then(data => {
    return(data);
  });

  return data;
};

ReactDOM.render(<p>Loading . . .</p>, document.getElementById('root'))

UseFetch(`/api/gallery`)
.then(images => {
  console.log(images)
  ReactDOM.render(<App images={images}/>, document.getElementById('root'));
})

serviceWorker.unregister();
