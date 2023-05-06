import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home';
import Blog from './components/Blog';
import Topic from './components/Topics';
import PageNotFound from './components/PageNotFound';
import Quiz from './components/Quiz';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Main></Main>, children:[
      {path: '/',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
        element: <Home></Home>},
      {path: '/topic', 
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element:<Topic></Topic>},
      {path: '/topic/:topicId',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        element: <Quiz></Quiz>
      },
      {path: '/blog', element: <Blog></Blog>},
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
