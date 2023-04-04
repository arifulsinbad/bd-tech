import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
    <div className="App mx-auto">
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>

      </Provider>
    </div>
  );
}

export default App;
