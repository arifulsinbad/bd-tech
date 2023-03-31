import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className="App mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
