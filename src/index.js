import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './components/loginPage';
import ErrorPage from './components/errorPage';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {  
    path: "/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
   path: "/focus",
   element: <App/>,
   errorElement: <ErrorPage/> 
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://binnt.ly/CRA-vitals
reportWebVitals();
