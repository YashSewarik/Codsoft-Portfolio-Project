import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Skills from './components/Skills/skills.jsx'
import Github, { gitinfo } from './components/github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path = '' element = {<Home />}/>
      <Route path = 'about' element = {<About />}/>
      <Route path = 'contact' element = {<Contact />}/>
      <Route path = 'user/:id' element = {<User />}/>
      <Route 
      loader={gitinfo}
      path = 'github' 
      element = {<Github />}
      />
      <Route path = 'skills' element = {<Skills />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
