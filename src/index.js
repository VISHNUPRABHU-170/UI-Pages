import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Age from './Components/Age-Calculator';
import Res from './Components/Result-Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route index to path='/' element={<App></App>}></Route>
          <Route path='/age-calc' element={<Age></Age>}></Route>
          <Route path='/res-sum' element={<Res></Res>}></Route>
          <Route path='/pers-info' element={<Res></Res>}></Route>
          <Route path='/news-pge' element={<Res></Res>}></Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
