import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='max-w-screen-lg  mx-auto'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </>,
)
