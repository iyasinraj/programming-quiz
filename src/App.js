import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home';
import Topic from './components/Topics';
import PageNotFound from './components/PageNotFound';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Main></Main>, children:[
      {path: '/', element: <Home></Home>},
      {path: '/topic', element:<Topic></Topic>},
      {path: '/', element: <Home></Home>},
      {path: '*', element: <PageNotFound></PageNotFound>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
